(function () {
  "use strict";

  // 기존 localStorage 키를 그대로 유지해서 이전 학습 기록을 최대한 이어서 사용합니다.
  var STORAGE_KEY = "opicIlVocabPwaStateV1";
  var ENCOURAGEMENT_MESSAGES = {
    start: [
      "오늘도 한 걸음씩 나아가고 있어요.",
      "조금씩 꾸준히 하는 것이 가장 강합니다.",
      "지금의 10분이 시험장에서 큰 차이를 만듭니다."
    ],
    progress: [
      "지금처럼만 꾸준히 하면 충분히 실력이 쌓여요.",
      "하나씩 익힌 표현이 말하기 자신감으로 이어집니다.",
      "오늘의 복습이 내일의 자연스러운 말하기를 만듭니다."
    ],
    strong: [
      "여기까지 온 꾸준함이 이미 큰 실력입니다.",
      "쌓아 둔 단어들이 답변 속도와 자신감을 올려 줍니다.",
      "지금 페이스를 유지하면 실전에서도 훨씬 편해질 거예요."
    ]
  };

  var DEFAULT_STATE = {
    favorites: {},
    completed: {},
    currentWordId: WORDS.length ? WORDS[0].id : null,
    showMeaning: true,
    showSentence: true,
    searchText: "",
    filterMode: "all",
    viewMode: "card",
    recentStudyAt: "",
    screen: "home"
  };

  var state = loadState();
  var elements = {};
  var selectedVoice = null;
  var messageTimer = null;
  var currentEncouragement = "";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    // 앱을 열면 항상 홈 대시보드에서 시작하도록 맞춥니다.
    state.screen = "home";
    refreshEncouragement();
    cacheElements();
    bindEvents();
    setupSpeech();
    registerServiceWorker();
    render();
  }

  function cacheElements() {
    elements.homeView = document.getElementById("homeView");
    elements.studyView = document.getElementById("studyView");
    elements.encouragementText = document.getElementById("encouragementText");
    elements.homeProgressRing = document.getElementById("homeProgressRing");
    elements.homeProgressPercent = document.getElementById("homeProgressPercent");
    elements.homeLinearProgress = document.getElementById("homeLinearProgress");
    elements.homeSummaryText = document.getElementById("homeSummaryText");
    elements.homeSummarySubtext = document.getElementById("homeSummarySubtext");
    elements.homeTotalCount = document.getElementById("homeTotalCount");
    elements.homeCompletedCount = document.getElementById("homeCompletedCount");
    elements.homeFavoriteCount = document.getElementById("homeFavoriteCount");
    elements.homeProgressStat = document.getElementById("homeProgressStat");
    elements.recentWordText = document.getElementById("recentWordText");
    elements.recentTimeText = document.getElementById("recentTimeText");
    elements.recentCategoryText = document.getElementById("recentCategoryText");
    elements.homeActions = document.getElementById("homeActions");
    elements.openResetButton = document.getElementById("openResetButton");
    elements.resetModal = document.getElementById("resetModal");
    elements.cancelResetButton = document.getElementById("cancelResetButton");
    elements.confirmResetButton = document.getElementById("confirmResetButton");
    elements.goHomeButton = document.getElementById("goHomeButton");

    elements.progressText = document.getElementById("progressText");
    elements.sampleText = document.getElementById("sampleText");
    elements.progressFill = document.getElementById("progressFill");
    elements.searchInput = document.getElementById("searchInput");
    elements.filterButtons = document.getElementById("filterButtons");
    elements.viewButtons = document.getElementById("viewButtons");
    elements.toggleMeaningButton = document.getElementById("toggleMeaningButton");
    elements.toggleSentenceButton = document.getElementById("toggleSentenceButton");
    elements.resultInfo = document.getElementById("resultInfo");
    elements.positionInfo = document.getElementById("positionInfo");
    elements.emptyState = document.getElementById("emptyState");
    elements.emptyStateTitle = document.getElementById("emptyStateTitle");
    elements.emptyStateText = document.getElementById("emptyStateText");
    elements.cardView = document.getElementById("cardView");
    elements.wordCard = document.getElementById("wordCard");
    elements.listView = document.getElementById("listView");
    elements.wordList = document.getElementById("wordList");
    elements.prevButton = document.getElementById("prevButton");
    elements.randomButton = document.getElementById("randomButton");
    elements.nextButton = document.getElementById("nextButton");
    elements.feedbackMessage = document.getElementById("feedbackMessage");
  }

  function bindEvents() {
    elements.homeActions.addEventListener("click", function (event) {
      var button = event.target.closest("[data-home-action]");
      if (!button) {
        return;
      }

      handleHomeAction(button.getAttribute("data-home-action"));
    });

    elements.openResetButton.addEventListener("click", openResetModal);
    elements.cancelResetButton.addEventListener("click", closeResetModal);
    elements.confirmResetButton.addEventListener("click", resetAllData);
    elements.resetModal.addEventListener("click", function (event) {
      if (event.target.getAttribute("data-modal-close") === "true") {
        closeResetModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeResetModal();
      }
    });

    elements.goHomeButton.addEventListener("click", function () {
      state.screen = "home";
      render();
    });

    elements.searchInput.addEventListener("input", function (event) {
      state.searchText = event.target.value || "";
      render();
    });

    elements.filterButtons.addEventListener("click", function (event) {
      var button = event.target.closest("[data-filter]");
      if (!button) {
        return;
      }

      state.filterMode = button.getAttribute("data-filter");
      render();
    });

    elements.viewButtons.addEventListener("click", function (event) {
      var button = event.target.closest("[data-view]");
      if (!button) {
        return;
      }

      state.viewMode = button.getAttribute("data-view");
      render();
    });

    elements.toggleMeaningButton.addEventListener("click", function () {
      state.showMeaning = !state.showMeaning;
      render();
    });

    elements.toggleSentenceButton.addEventListener("click", function () {
      state.showSentence = !state.showSentence;
      render();
    });

    elements.prevButton.addEventListener("click", function () {
      moveWord(-1);
    });

    elements.nextButton.addEventListener("click", function () {
      moveWord(1);
    });

    elements.randomButton.addEventListener("click", function () {
      moveRandom();
    });

    elements.wordCard.addEventListener("click", function (event) {
      var button = event.target.closest("[data-action]");
      if (!button) {
        return;
      }

      handleAction(button.getAttribute("data-action"), Number(button.getAttribute("data-id")));
    });

    elements.wordList.addEventListener("click", function (event) {
      var button = event.target.closest("[data-action]");
      if (!button) {
        return;
      }

      handleAction(button.getAttribute("data-action"), Number(button.getAttribute("data-id")));
    });
  }

  function handleHomeAction(action) {
    if (action === "continue") {
      startStudy({
        preserveContext: true
      });
      return;
    }

    if (action === "random") {
      state.searchText = "";
      state.filterMode = "all";
      state.viewMode = "card";
      startStudy({
        random: true
      });
      return;
    }

    if (action === "favorites") {
      state.searchText = "";
      state.filterMode = "favorites";
      state.viewMode = "card";
      startStudy();
      return;
    }

    if (action === "completed") {
      state.searchText = "";
      state.filterMode = "completed";
      state.viewMode = "card";
      startStudy();
    }
  }

  function startStudy(options) {
    var filteredWords;
    var targetWord;

    options = options || {};
    state.screen = "study";
    filteredWords = getFilteredWords();

    if (options.random && filteredWords.length) {
      targetWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
      state.currentWordId = targetWord.id;
    } else if (filteredWords.length && getWordIndex(filteredWords, state.currentWordId) === -1) {
      state.currentWordId = filteredWords[0].id;
    }

    if (filteredWords.length) {
      markRecentStudy(state.currentWordId);
    } else {
      showMessage(getEmptyFilterMessage());
    }

    render();
  }

  function openResetModal() {
    elements.resetModal.classList.remove("hidden");
    elements.resetModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeResetModal() {
    elements.resetModal.classList.add("hidden");
    elements.resetModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function resetAllData() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // removeItem 실패 시에도 화면 상태는 기본값으로 되돌립니다.
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    state = cloneState(DEFAULT_STATE);
    state.screen = "home";
    refreshEncouragement();
    closeResetModal();
    render();
    showMessage("학습 기록을 모두 초기화했어요.");
  }

  function handleAction(action, id) {
    var word = findWordById(id);

    if (!word) {
      return;
    }

    if (action === "speak-word") {
      markRecentStudy(id);
      render();
      speakText(word.word);
    } else if (action === "speak-sentence") {
      markRecentStudy(id);
      render();
      speakText(word.sentence);
    } else if (action === "toggle-favorite") {
      toggleRecord(state.favorites, id);
      markRecentStudy(id);
      showMessage(state.favorites[id] ? "즐겨찾기에 추가했어요." : "즐겨찾기에서 제거했어요.");
      render();
    } else if (action === "toggle-completed") {
      toggleRecord(state.completed, id);
      markRecentStudy(id);
      showMessage(state.completed[id] ? "학습 완료로 표시했어요." : "학습 완료를 해제했어요.");
      render();
    } else if (action === "open-card") {
      state.currentWordId = id;
      state.viewMode = "card";
      markRecentStudy(id);
      render();
    }
  }

  function render() {
    var stats = getStats();
    var filteredWords = getFilteredWords();
    var currentWord = getCurrentWord(filteredWords);

    renderHome(stats);
    renderStudy(stats, filteredWords, currentWord);
    updateScreen();
    saveState();
  }

  function renderHome(stats) {
    var recentWord = getRecentWord(stats);
    var hasRecentInfo = !!state.recentStudyAt || stats.completedCount > 0 || stats.favoriteCount > 0;

    elements.encouragementText.textContent = currentEncouragement;
    elements.homeProgressPercent.textContent = stats.progressPercent + "%";
    elements.homeProgressRing.style.setProperty("--progress-angle", (stats.progressPercent * 3.6) + "deg");
    elements.homeLinearProgress.style.width = stats.progressPercent + "%";

    elements.homeSummaryText.textContent = stats.totalCount + "개 중 " + stats.completedCount + "개 학습 완료";
    elements.homeSummarySubtext.textContent = getSummarySubtext(stats);

    elements.homeTotalCount.textContent = String(stats.totalCount);
    elements.homeCompletedCount.textContent = String(stats.completedCount);
    elements.homeFavoriteCount.textContent = String(stats.favoriteCount);
    elements.homeProgressStat.textContent = stats.progressPercent + "%";

    if (!hasRecentInfo || !recentWord) {
      elements.recentWordText.textContent = "아직 학습 기록이 없어요.";
      elements.recentTimeText.textContent = "단어 학습을 시작하면 최근 기록이 표시돼요.";
      elements.recentCategoryText.textContent = "마지막으로 본 단어와 카테고리를 여기에서 확인할 수 있어요.";
      return;
    }

    elements.recentWordText.textContent = recentWord.word + " · " + recentWord.meaning;
    elements.recentTimeText.textContent = state.recentStudyAt ? "최근 학습 시간: " + formatDateTime(state.recentStudyAt) : "이전 버전 기록에는 시간 정보가 없어요.";
    elements.recentCategoryText.textContent = "카테고리: " + recentWord.category + " / 예문: " + recentWord.sentence;
  }

  function renderStudy(stats, filteredWords, currentWord) {
    elements.searchInput.value = state.searchText;
    elements.progressText.textContent = "진행률 " + stats.completedCount + " / " + stats.totalCount;
    elements.sampleText.textContent = "전체 단어 " + stats.totalCount + "개";
    elements.progressFill.style.width = stats.progressPercent + "%";
    elements.resultInfo.textContent = "검색 결과 " + filteredWords.length + "개";
    elements.positionInfo.textContent = currentWord ? "현재 " + (getWordIndex(filteredWords, currentWord.id) + 1) + " / " + filteredWords.length : "현재 0 / 0";
    elements.toggleMeaningButton.textContent = state.showMeaning ? "뜻 숨기기" : "뜻 보기";
    elements.toggleSentenceButton.textContent = state.showSentence ? "예문 숨기기" : "예문 보기";

    syncActiveButtons(elements.filterButtons.querySelectorAll("[data-filter]"), "data-filter", state.filterMode);
    syncActiveButtons(elements.viewButtons.querySelectorAll("[data-view]"), "data-view", state.viewMode);

    if (!filteredWords.length) {
      renderEmptyState();
      updateNavButtons(filteredWords, currentWord);
      return;
    }

    elements.emptyState.classList.add("hidden");

    if (state.viewMode === "card") {
      elements.cardView.classList.remove("hidden");
      elements.listView.classList.add("hidden");
    } else {
      elements.cardView.classList.add("hidden");
      elements.listView.classList.remove("hidden");
    }

    renderCard(currentWord);
    renderList(filteredWords);
    updateNavButtons(filteredWords, currentWord);
  }

  function renderEmptyState() {
    elements.emptyState.classList.remove("hidden");
    elements.cardView.classList.add("hidden");
    elements.listView.classList.add("hidden");
    elements.emptyStateTitle.textContent = getEmptyStateTitle();
    elements.emptyStateText.textContent = getEmptyStateText();
  }

  function renderCard(word) {
    var badges = [];

    if (!word) {
      elements.wordCard.innerHTML = "";
      return;
    }

    if (state.favorites[word.id]) {
      badges.push('<span class="state-badge favorite">즐겨찾기</span>');
    }

    if (state.completed[word.id]) {
      badges.push('<span class="state-badge">학습완료</span>');
    }

    elements.wordCard.innerHTML =
      '<div class="card-top">' +
        '<span class="category-badge">' + escapeHTML(word.category) + "</span>" +
        '<div class="badge-row">' + badges.join("") + "</div>" +
      "</div>" +
      '<h2 class="word-title">' + escapeHTML(word.word) + "</h2>" +
      '<p class="pronunciation">발음 가이드: ' + escapeHTML(word.pronunciation) + "</p>" +
      '<section class="info-block">' +
        "<h3>뜻</h3>" +
        (state.showMeaning
          ? "<p>" + escapeHTML(word.meaning) + "</p>"
          : '<p class="placeholder-text">뜻이 숨겨져 있어요. 위의 버튼으로 다시 볼 수 있어요.</p>') +
      "</section>" +
      '<section class="info-block">' +
        "<h3>예문</h3>" +
        (state.showSentence
          ? "<p>" + escapeHTML(word.sentence) + "</p>" +
            "<p>" + escapeHTML(word.sentenceMeaning) + "</p>" +
            "<p>발음: " + escapeHTML(word.sentencePronunciation) + "</p>"
          : '<p class="placeholder-text">예문이 숨겨져 있어요. 위의 버튼으로 다시 볼 수 있어요.</p>') +
      "</section>" +
      '<div class="action-grid">' +
        '<button type="button" class="action-button primary" data-action="speak-word" data-id="' + word.id + '">단어 듣기</button>' +
        '<button type="button" class="action-button primary" data-action="speak-sentence" data-id="' + word.id + '">문장 듣기</button>' +
        '<button type="button" class="action-button ' + (state.favorites[word.id] ? "favorite-active" : "") + '" data-action="toggle-favorite" data-id="' + word.id + '">' + (state.favorites[word.id] ? "즐겨찾기 해제" : "즐겨찾기") + "</button>" +
        '<button type="button" class="action-button ' + (state.completed[word.id] ? "completed-active" : "") + '" data-action="toggle-completed" data-id="' + word.id + '">' + (state.completed[word.id] ? "완료 해제" : "학습 완료") + "</button>" +
      "</div>";
  }

  function renderList(filteredWords) {
    var html = filteredWords.map(function (word) {
      var badges = [];

      if (state.favorites[word.id]) {
        badges.push('<span class="state-badge favorite">즐겨찾기</span>');
      }

      if (state.completed[word.id]) {
        badges.push('<span class="state-badge">학습완료</span>');
      }

      return (
        '<article class="list-card' + (word.id === state.currentWordId ? " is-selected" : "") + '">' +
          '<div class="list-top">' +
            '<span class="category-badge">' + escapeHTML(word.category) + "</span>" +
            '<div class="badge-row">' + badges.join("") + "</div>" +
          "</div>" +
          '<h3 class="list-title">' + escapeHTML(word.word) + "</h3>" +
          '<p class="list-pronunciation">발음 가이드: ' + escapeHTML(word.pronunciation) + "</p>" +
          '<p class="list-text">' + (state.showMeaning ? escapeHTML(word.meaning) : "뜻 숨김") + "</p>" +
          '<p class="list-text">' + (state.showSentence ? escapeHTML(word.sentence) : "예문 숨김") + "</p>" +
          '<p class="list-text">' + (state.showSentence ? escapeHTML(word.sentenceMeaning) : "예문 뜻 숨김") + "</p>" +
          '<p class="list-text">' + (state.showSentence ? "발음: " + escapeHTML(word.sentencePronunciation) : "예문 발음 가이드 숨김") + "</p>" +
          '<div class="list-action-grid">' +
            '<button type="button" class="list-action-button primary" data-action="open-card" data-id="' + word.id + '">카드 열기</button>' +
            '<button type="button" class="list-action-button" data-action="speak-word" data-id="' + word.id + '">단어 듣기</button>' +
            '<button type="button" class="list-action-button ' + (state.favorites[word.id] ? "favorite-active" : "") + '" data-action="toggle-favorite" data-id="' + word.id + '">' + (state.favorites[word.id] ? "즐겨찾기 해제" : "즐겨찾기") + "</button>" +
            '<button type="button" class="list-action-button ' + (state.completed[word.id] ? "completed-active" : "") + '" data-action="toggle-completed" data-id="' + word.id + '">' + (state.completed[word.id] ? "완료 해제" : "학습 완료") + "</button>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    elements.wordList.innerHTML = html;
  }

  function updateScreen() {
    if (state.screen === "study") {
      elements.homeView.classList.add("hidden");
      elements.studyView.classList.remove("hidden");
      return;
    }

    elements.homeView.classList.remove("hidden");
    elements.studyView.classList.add("hidden");
  }

  function updateNavButtons(filteredWords, currentWord) {
    var currentIndex;

    if (!filteredWords.length || !currentWord) {
      elements.prevButton.disabled = true;
      elements.randomButton.disabled = true;
      elements.nextButton.disabled = true;
      return;
    }

    currentIndex = getWordIndex(filteredWords, currentWord.id);
    elements.prevButton.disabled = currentIndex <= 0;
    elements.randomButton.disabled = filteredWords.length <= 1;
    elements.nextButton.disabled = currentIndex >= filteredWords.length - 1;
  }

  function moveWord(step) {
    var filteredWords = getFilteredWords();
    var currentWord = getCurrentWord(filteredWords);
    var currentIndex = currentWord ? getWordIndex(filteredWords, currentWord.id) : 0;
    var nextIndex = currentIndex + step;

    if (!filteredWords.length) {
      return;
    }

    if (nextIndex < 0 || nextIndex >= filteredWords.length) {
      return;
    }

    markRecentStudy(filteredWords[nextIndex].id);
    render();
  }

  function moveRandom() {
    var filteredWords = getFilteredWords();
    var currentWord = getCurrentWord(filteredWords);
    var randomIndex;

    if (filteredWords.length <= 1) {
      return;
    }

    do {
      randomIndex = Math.floor(Math.random() * filteredWords.length);
    } while (currentWord && filteredWords[randomIndex].id === currentWord.id);

    markRecentStudy(filteredWords[randomIndex].id);
    render();
  }

  function markRecentStudy(wordId) {
    if (typeof wordId === "number") {
      state.currentWordId = wordId;
    }

    state.recentStudyAt = new Date().toISOString();
  }

  function getStats() {
    var totalCount = WORDS.length;
    var completedCount = countActive(state.completed);
    var favoriteCount = countActive(state.favorites);

    return {
      totalCount: totalCount,
      completedCount: completedCount,
      favoriteCount: favoriteCount,
      progressPercent: totalCount ? Math.round((completedCount / totalCount) * 100) : 0
    };
  }

  function getSummarySubtext(stats) {
    var remainingCount = stats.totalCount - stats.completedCount;

    if (!stats.completedCount) {
      return "지금부터 차근차근 시작해 보세요.";
    }

    if (remainingCount <= 0) {
      return "모든 단어를 학습 완료했어요. 복습으로 감각을 유지해 보세요.";
    }

    return "즐겨찾기 " + stats.favoriteCount + "개 · 아직 " + remainingCount + "개 남아 있어요.";
  }

  function getRecentWord(stats) {
    var hasSavedActivity = !!state.recentStudyAt || stats.completedCount > 0 || stats.favoriteCount > 0;

    if (!hasSavedActivity) {
      return null;
    }

    return findWordById(state.currentWordId);
  }

  function getFilteredWords() {
    var query = (state.searchText || "").toLowerCase();

    return WORDS.filter(function (word) {
      var searchTarget = [
        word.word,
        word.meaning,
        word.pronunciation,
        word.sentence,
        word.sentenceMeaning,
        word.sentencePronunciation,
        word.category
      ].join(" ").toLowerCase();
      var matchesQuery = !query || searchTarget.indexOf(query) !== -1;
      var matchesFilter = true;

      if (state.filterMode === "favorites") {
        matchesFilter = !!state.favorites[word.id];
      } else if (state.filterMode === "completed") {
        matchesFilter = !!state.completed[word.id];
      } else if (state.filterMode === "unlearned") {
        matchesFilter = !state.completed[word.id];
      }

      return matchesQuery && matchesFilter;
    });
  }

  function getCurrentWord(filteredWords) {
    var currentWord = findWordById(state.currentWordId);

    if (!filteredWords.length) {
      return null;
    }

    if (!currentWord || getWordIndex(filteredWords, state.currentWordId) === -1) {
      state.currentWordId = filteredWords[0].id;
      currentWord = filteredWords[0];
    }

    return currentWord;
  }

  function getWordIndex(list, wordId) {
    var index = -1;

    list.some(function (item, itemIndex) {
      if (item.id === wordId) {
        index = itemIndex;
        return true;
      }

      return false;
    });

    return index;
  }

  function findWordById(id) {
    var foundWord = null;

    WORDS.some(function (word) {
      if (word.id === id) {
        foundWord = word;
        return true;
      }

      return false;
    });

    return foundWord;
  }

  function getEmptyStateTitle() {
    if (state.filterMode === "favorites") {
      return "즐겨찾기 단어가 아직 없어요.";
    }

    if (state.filterMode === "completed") {
      return "완료한 단어가 아직 없어요.";
    }

    if (state.filterMode === "unlearned") {
      return "모든 단어를 학습 완료했어요.";
    }

    return "조건에 맞는 단어가 없어요.";
  }

  function getEmptyStateText() {
    if (state.filterMode === "favorites") {
      return state.searchText ? "검색어를 지우거나 다른 단어를 즐겨찾기 해 보세요." : "학습 화면에서 자주 보고 싶은 단어를 즐겨찾기 해 보세요.";
    }

    if (state.filterMode === "completed") {
      return state.searchText ? "검색어를 지우거나 다른 완료 단어를 찾아보세요." : "단어를 학습 완료로 표시하면 여기에서 바로 복습할 수 있어요.";
    }

    if (state.filterMode === "unlearned") {
      return "정말 잘하고 있어요. 전체 보기로 돌아가 복습해 보세요.";
    }

    return "검색어를 지우거나 필터를 바꿔서 다시 확인해 보세요.";
  }

  function getEmptyFilterMessage() {
    if (state.filterMode === "favorites") {
      return "즐겨찾기 단어가 아직 없어요.";
    }

    if (state.filterMode === "completed") {
      return "완료한 단어가 아직 없어요.";
    }

    return "조건에 맞는 단어가 없어요.";
  }

  function syncActiveButtons(buttons, attributeName, activeValue) {
    Array.prototype.forEach.call(buttons, function (button) {
      button.classList.toggle("is-active", button.getAttribute(attributeName) === activeValue);
    });
  }

  function toggleRecord(record, id) {
    if (record[id]) {
      delete record[id];
      return;
    }

    record[id] = true;
  }

  function countActive(record) {
    return Object.keys(record || {}).length;
  }

  function loadState() {
    var loadedState = cloneState(DEFAULT_STATE);
    var rawState;
    var parsedState;

    try {
      rawState = window.localStorage.getItem(STORAGE_KEY);

      if (!rawState) {
        return loadedState;
      }

      parsedState = JSON.parse(rawState);
    } catch (error) {
      return loadedState;
    }

    if (parsedState && typeof parsedState === "object") {
      loadedState.favorites = normalizeRecord(parsedState.favorites || parsedState.favoriteWords);
      loadedState.completed = normalizeRecord(parsedState.completed || parsedState.completedWords);
      loadedState.currentWordId = typeof parsedState.currentWordId === "number"
        ? parsedState.currentWordId
        : (typeof parsedState.lastViewedWord === "number" ? parsedState.lastViewedWord : loadedState.currentWordId);
      loadedState.showMeaning = typeof parsedState.showMeaning === "boolean" ? parsedState.showMeaning : loadedState.showMeaning;
      loadedState.showSentence = typeof parsedState.showSentence === "boolean" ? parsedState.showSentence : loadedState.showSentence;
      loadedState.searchText = typeof parsedState.searchText === "string" ? parsedState.searchText : loadedState.searchText;
      loadedState.filterMode = typeof parsedState.filterMode === "string" ? parsedState.filterMode : loadedState.filterMode;
      loadedState.viewMode = typeof parsedState.viewMode === "string" ? parsedState.viewMode : loadedState.viewMode;
      loadedState.recentStudyAt = typeof parsedState.recentStudyAt === "string" ? parsedState.recentStudyAt : "";
      loadedState.screen = "home";
    }

    return loadedState;
  }

  function saveState() {
    var stateToSave;

    try {
      stateToSave = cloneState(state);
      stateToSave.favoriteWords = normalizeRecord(state.favorites);
      stateToSave.completedWords = normalizeRecord(state.completed);
      stateToSave.lastViewedWord = state.currentWordId;
      stateToSave.progress = getStats().progressPercent;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
      showMessage("브라우저 저장 공간에 접근하지 못했어요.");
    }
  }

  function cloneState(source) {
    return {
      favorites: normalizeRecord(source.favorites),
      completed: normalizeRecord(source.completed),
      currentWordId: source.currentWordId,
      showMeaning: source.showMeaning,
      showSentence: source.showSentence,
      searchText: source.searchText,
      filterMode: source.filterMode,
      viewMode: source.viewMode,
      recentStudyAt: source.recentStudyAt || "",
      screen: source.screen || "home"
    };
  }

  function normalizeRecord(value) {
    var normalized = {};

    if (!value || typeof value !== "object") {
      return normalized;
    }

    Object.keys(value).forEach(function (key) {
      if (value[key]) {
        normalized[key] = true;
      }
    });

    return normalized;
  }

  function refreshEncouragement() {
    var stats = getStats();
    var messageGroup = ENCOURAGEMENT_MESSAGES.start;

    if (stats.progressPercent >= 60) {
      messageGroup = ENCOURAGEMENT_MESSAGES.strong;
    } else if (stats.completedCount > 0) {
      messageGroup = ENCOURAGEMENT_MESSAGES.progress;
    }

    currentEncouragement = messageGroup[Math.floor(Math.random() * messageGroup.length)];
  }

  function formatDateTime(isoText) {
    var date = new Date(isoText);

    if (!isoText || String(date) === "Invalid Date") {
      return "시간 정보가 없어요.";
    }

    return date.toLocaleString("ko-KR");
  }

  function setupSpeech() {
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance === "undefined") {
      return;
    }

    updateVoice();

    if (typeof window.speechSynthesis.addEventListener === "function") {
      window.speechSynthesis.addEventListener("voiceschanged", updateVoice);
    }
  }

  function updateVoice() {
    var voices = window.speechSynthesis.getVoices();

    selectedVoice = findVoiceByLang(voices, "en-US") || findVoiceByPrefix(voices, "en") || null;
  }

  function findVoiceByLang(voices, targetLang) {
    var foundVoice = null;

    Array.prototype.some.call(voices, function (voice) {
      if (voice.lang === targetLang) {
        foundVoice = voice;
        return true;
      }

      return false;
    });

    return foundVoice;
  }

  function findVoiceByPrefix(voices, langPrefix) {
    var foundVoice = null;

    Array.prototype.some.call(voices, function (voice) {
      if (voice.lang && voice.lang.toLowerCase().indexOf(langPrefix) === 0) {
        foundVoice = voice;
        return true;
      }

      return false;
    });

    return foundVoice;
  }

  function speakText(text) {
    var utterance;

    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance === "undefined") {
      showMessage("이 브라우저는 음성 재생을 지원하지 않아요.");
      return;
    }

    if (!text) {
      return;
    }

    utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.pitch = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    showMessage("음성을 재생하고 있어요.");
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {
        showMessage("오프라인 기능 등록에 실패했어요.");
      });
    });
  }

  function showMessage(message) {
    if (!elements.feedbackMessage) {
      return;
    }

    elements.feedbackMessage.textContent = message;

    if (messageTimer) {
      window.clearTimeout(messageTimer);
    }

    messageTimer = window.setTimeout(function () {
      elements.feedbackMessage.textContent = "";
    }, 2400);
  }

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const selectRandomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const iterateClass = (className, elementFunction) => {
  Array.prototype.forEach.call(
    document.getElementsByClassName(className),
    elementFunction
  );
};

const iterateQuery = (query, elementFunction) => {
  Array.prototype.forEach.call(
    document.querySelectorAll(query),
    elementFunction
  );
};

const empty_html_spaces = (no_of_spaces) => {
  const empty_html_spaces_list = new Array(no_of_spaces).fill(<>&nbsp;</>);
  return <>{empty_html_spaces_list}</>;
};

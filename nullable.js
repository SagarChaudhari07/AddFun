function buildName(first, last, middle) {
    if (middle) {
        return "".concat(first, " ").concat(middle, " ").concat(last);
    }
    else {
        return "".concat(first, " ").concat(last);
    }
}
console.log(buildName('Craig', 'McKeachie'));
console.log(buildName('Craig', 'McKeachie', 'D.'));

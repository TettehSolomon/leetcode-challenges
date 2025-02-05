/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;  // If the string is of length 1 or less, it is already a palindrome

    let start = 0, end = 0;  // Variables to track the start and end indices of the longest palindrome found

    // Helper function to expand around the center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        // Try to expand around single character (odd length palindromes)
        let len1 = expandAroundCenter(i, i);
        // Try to expand around the gap between two characters (even length palindromes)
        let len2 = expandAroundCenter(i, i + 1);

        // Get the maximum length palindrome found
        let maxLen = Math.max(len1, len2);

        // If we found a longer palindrome, update the start and end indices
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
};

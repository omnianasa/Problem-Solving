#include <iostream>
#include <bits/stdc++.h>

using namespace std;
int countDistinctLetters(const string &str)
{
    unordered_set<char> uniqueChars;
    for (char ch : str)
    {
        uniqueChars.insert(tolower(ch));
    }
    return uniqueChars.size();
}

int main()
{
    string s;
    cin >> s;
    int total = countDistinctLetters(s);
    if (total % 2 == 0)
    {
        cout << "CHAT WITH HER!";
    }
    else
    {
        cout << "IGNORE HIM!";
    }

    return 0;
}

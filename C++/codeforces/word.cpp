#include <iostream>
using namespace std;
int main()
{
    string s;
    cin >> s;
    int sum = 0;
    // count the number of lower case
    for (char ch : s)
    {
        if (islower(ch))
        {
            sum += 1;
        }
    }
    if (sum >= (s.length() + 1) / 2)
    {
        for (char &ch : s)
        {
            ch = tolower(ch);
        }
        cout << s;
    }
    else
    {
        for (char &ch : s)
        {
            ch = toupper(ch);
        }
        cout << s;
    }
}
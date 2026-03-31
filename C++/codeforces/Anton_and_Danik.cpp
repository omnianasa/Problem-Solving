#include <iostream>
using namespace std;

int main()
{
    int num;
    string ch;
    int sumA = 0, sumD = 0;
    cin >> num >> ch;
    for (int i = 0; i < ch.length(); i++)
    {
        if (ch[i] == 'A')
        {
            sumA++;
        }
        else
        {
            sumD++;
        }
    }
    if (sumA > sumD)
    {
        cout << "Anton";
    }
    else if (sumD > sumA)
    {
        cout << "Danik";
    }
    else
    {
        cout << "Friendship";
    }
}
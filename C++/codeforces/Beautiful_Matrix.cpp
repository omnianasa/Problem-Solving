#include <iostream>

using namespace std;

int main()
{
    int num;
    int n = 5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> num;
            if (num == 1)
            {
                cout << abs(i - 2) + abs(j - 2);
                return 0;
            }
        }
    }
    return 0;
}
#include <iostream>

using namespace std;
int main()
{
    int n;
    cin >> n;
    while (n--)
    {
        int num, sum = 0, max_num = -68;

        for (int i = 0; i < 7; i++)
        {
            cin >> num;
            sum -= num;
            if (num > max_num)
                max_num = num;
        }

        cout << sum + (2 * max_num) << endl;
    }
}
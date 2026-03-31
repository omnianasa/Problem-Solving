#include <iostream>

using namespace std;
int main()
{
    int q;
    int q1 = 0, q2 = 0, q3 = 0;
    int sure = 0;
    cin >> q;
    for (int i = 0; i < q; i++)
    {
        cin >> q1 >> q2 >> q3;
        if (q1 + q2 + q3 >= 2)
        {
            sure++;
        }
    }
    cout << sure;
}
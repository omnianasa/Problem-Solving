#include <iostream>
using namespace std;

int main()
{

    int n1, n2;
    cin >> n1 >> n2;
    int years = 0;
    while (n1 <= n2)
    {
        n1 *= 3;
        n2 *= 2;
        years++;
    }
    cout << years;
}
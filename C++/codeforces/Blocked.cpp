#include <iostream>
using namespace std;

int main()
{
    int num, n, number;
    cin >> num;
    while (num--)
    {
        cin >> n;
        int arr[n];
        for (int j = 0; j < n; j++)
        {
            cin >> number;

            arr[j] = number;
        }

        // sorting the array in descending order
        for (int j = 0; j < n - 1; j++)
        {
            for (int k = 0; k < n - j - 1; k++)
            {
                if (arr[k] < arr[k + 1])
                {
                    swap(arr[k], arr[k + 1]);
                }
            }
        }
        // check if the array elements are blocked or not by counting the duplicates
        bool duplicates = false;
        for (int j = 0; j < n - 1; j++)
        {
            if (arr[j] == arr[j + 1])
            {
                duplicates = true;
                break;
            }
        }
        if (duplicates)
        {
            cout << -1 << endl;
        }
        else
        {
            for (int j = 0; j < n; j++)
            {
                cout << arr[j] << " ";
            }
            cout << endl;
        }
    }
}
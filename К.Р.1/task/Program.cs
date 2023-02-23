/*Написать программу, которая из имеющегося массива строк формирует новый массив из строк, 
длина которых меньше, либо равна 3 символам. Первоначальный массив можно ввести с клавиатуры, 
либо задать на старте выполнения алгоритма. 
При решении не рекомендуется пользоваться коллекциями, лучше обойтись исключительно массивами.*/


string[] initialarray = new string[5] {"123", "yes", "hello", "world", "men"};
string[] finalarray = new string[initialarray.Length];
void ArrayFirst(string[] initialarray, string[] finalarray)
{
    int count = 0;
    for (int i = 0; i < initialarray.Length; i++)
    {
    if(initialarray[i].Length <= 3)
        {
        finalarray[count] = initialarray[i];
        count++;
        }
    }
}
void PrintArray(string[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write($"{array[i]} ");
    }
    Console.WriteLine();
}
ArrayFirst(initialarray, finalarray);
PrintArray(finalarray);
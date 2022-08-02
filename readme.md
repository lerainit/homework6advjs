## Асинхронность в Java Script
<br>

Java Script сам по себе не может обеспечить асинхронности выполнения операций

Язык однопоточный Все операции выполняются синхронно то есть следующая операция выполняется только после предыдущей в том порядке в котором они в коде

Это создает проблемы и не подходит для операций где нужна асинхронность(все операции взаимодействия с сервером)

- Асинхронность в Java Script обеспечивает окружение в котором запускается код

- Браузер имеет WebAPI который предоставляет методы выполняющие асинхронный код

- Чтобы создать асинхронный вызов, в web API передается ссылка на функцию, которая выполнится позже или не выполнится вовсе.

- Java Script egine включает в себя 

- Heap(куча) - неупорядоченые события и функции

- Call stack(упорядоченые функции)

- Web Api(здесь обеспечиваются асинхронные операции взаимодействия с сервером также setTimeout setInterval)

- Queue(очередь)

- Event Loop (цыкл событий)

Web API и JavaScrtipt движок работают независимо. Web API решает, в какой момент функция двигается дальше, в очередь вызовов (2).


Функции в очереди вызовов попадают в JavaScript-движок, где выполняются по одной. Выполнение происходит в том же порядке, в котором функции попадают в очередь.


Окружение самостоятельно решает, когда добавить переданный ей код в очередь вызовов. Функции из очереди добавляются в стек выполнения (выполняются) не раньше, чем стек вызовов закончит работу над текущей функцией.

- Таким образом, стек вызовов работает синхронно, а web API асинхронно.





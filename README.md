# Test task

The left panel has a Lists list with nested lists of certain items. Each item has “quantity” and “color” parameters, which can be changed manually. The item is marked as selected using a checkbox.

All selected items are displayed on the right panel in a separate block for each List in the specified quantity in the form of colored squares.

Each individual List block has two states: sorted and shuffled.

Input data: 5 sheets from 4 to 10 nested elements (arbitrary)
See example layouts on the second page.

## Requirements
* When you click on the List level checkbox, all nested items should be selected. If all nested items are already selected, then deselect them.
* It should be possible to change the "quantity" parameter of items (a regular <input> is enough, the value should be >= 0);
* It should be possible to change the "color" parameter of items (<input type="color">);
* Sorting and shuffling Lists separately;
* All actions on the page must occur without reloading it;
* All changeable values must be reactive;
* Each item must initially have the default “quantity” and “color” parameters specified (set arbitrarily).

## Additional
* Lists in the left panel should collapse and expand;
* When you click on a square in the right panel, it should be deleted (the “quantity” parameter of the corresponding item should decrease).

## Code requirements
- Complete the task using vue.js (vuex, pinia if necessary), you can use css preprocessors;
- The code must be written clearly and accurately, observing tabulation and other writing elements, without unnecessary elements and functions that are not related to the functionality of the test task;
- Readability and the presence of elementary architecture;
- Layout must be done without using UI libraries.

============================================================================================

# Тестовая задача
 
Левая панель имеет список Lists с вложенными списками неких items. У каждого item есть параметры "количество"" и "цвет", которые можно менять вручную. Item помечается как выбранный с помощью чекбокса.
 
Все выбранные items отображаются на правой панели в отдельном блоке для каждого List в указанном количестве в виде цветных квадратиков.
 
Каждый отдельный блок List имеет два состояния: отсортированное и перемешанное в случайном порядке.
 
Входные данные: 5 листов от 4 до 10 вложенных элементов (произвольно)
Макеты для примера смотри на второй странице.

## Требования
* При клике на чекбокс уровня List должны выбираться все вложенные items. Если все вложенные items уже выбраны, то снимать с них выделение.
* Должна быть возможность изменять параметр "количество" у items (обычного <input> достаточно, значение должно быть >= 0);
* Должна быть возможность изменять параметр "цвет" у items (<input type="color">);
* Сортировка и перемешивание List'ов по отдельности;
* Все действия на странице должны происходить без её перезагрузки;
* Все изменяемые значения должны быть реактивными;
* У каждого item изначально должны быть указаны параметры "количество"" и "цвет" по умолчанию (задать произвольно).

## Дополнительно
* Lists в левой панели должны сворачиваться и разворачиваться;
* При клике на квадратик в правой панели он должен удаляться (уменьшаться параметр "количество" у соответствующего item).

## Требования по коду
- Задание выполнить с использованием vue.js (vuex, pinia если необходимо), можно использовать css препроцессоры;
- Код должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания, без лишних элементов и функций, не имеющих отношения к функционалу тестового задания;
- Читабельность и наличие элементарной архитектуры;
- Верстка должна быть выполнена без использования UI библиотек.

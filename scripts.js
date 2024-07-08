let btnNext = document.querySelector('.arrows .next');
        let btnBack = document.querySelector('.arrows .back');

        let container = document.querySelector('.container');
        let list = document.querySelector('.list');
        let thumb = document.querySelector('.thumb');

        btnNext.addEventListener('click', function () {
            moveItemsOnClick('next');
        });

        btnBack.addEventListener('click', function () {
            moveItemsOnClick('back');
        });

        function moveItemsOnClick(type) {
            let listItems = document.querySelectorAll('.list .list-item');
            let thumbItems = document.querySelectorAll('.thumb .thumb-item');

            if (type === 'next') {
                list.appendChild(listItems[0]);
                thumb.appendChild(thumbItems[0]);
                container.classList.add('next');
            } else {
                list.prepend(listItems[listItems.length - 1]);
                thumb.prepend(thumbItems[thumbItems.length - 1]);
                container.classList.add('back');
            }

            setTimeout(() => {
                container.classList.remove('next');
                container.classList.remove('back');
            }, 3000);
        }
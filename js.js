var btn = document.getElementById('btn');
	// при клике выполняеться функция перебора рамдомного массива
	btn.addEventListener('click', fortStart, false);

	function fortStart(){
		// переменная, где будет храниться результат перебора масива	
		var result; 
		// массив с элементами
		var arr = ["Да","Нет","Может быть!","Сомневаюсь!","Безусловно!","Только верь в себя","Так тому и быть","Зачем тебе это?","Тебе нужна правда?","Духи говорят, да!"];
		// рандомный перебор масива
		var number = Math.round(Math.random() * (arr.length-1));
		// сохранение выбраного элемента в переменную 'result'
		result = arr[number];
		//вывод текста на страницу
		document.getElementById('win-text').innerHTML = result;
		anim();
	};
	function anim(){
		// запуск анимации
		document.getElementById("triangle").style.webkitAnimationPlayState = "running";
		document.getElementById("triangle").style.animationPlayState = "running";
	};



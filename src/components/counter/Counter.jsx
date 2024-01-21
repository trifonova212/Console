import css from './Counter.module.css'
import { useState} from "react";

export default function Counter () {
	const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);
	const [quantity, setQuantity] = useState(0);


	const handleOnChange = (e) => {
	  setQuantity(e.target.value);
	  localStorage.setItem("count", JSON.stringify(count));
	};
  
	const handleSubtractQuantity = () => {
		if (quantity) {
		  const newCount = count - parseInt(quantity, 10);
		  setCount(newCount);
		  localStorage.setItem("count", JSON.stringify(newCount));
		}
		setQuantity('0');
	  };
  
	  const handleAddQuantity = () => {
		if (quantity) {
		  const newCount = count + parseInt(quantity, 10);
		  setCount(newCount);
		  localStorage.setItem("count", JSON.stringify(newCount));
		}
		setQuantity('0');
	  };

	return (
	  <div className={css.counter}>
		<p className={css.count}>{count} ₽</p>
		<input
			type="text"
			value={quantity}
			onChange={handleOnChange}
			className={css.input} />
        <div className={css.buttons}>
			<button
				className={css.button}
				onClick={handleSubtractQuantity} >
			-
			</button>
			<button onClick={handleAddQuantity}>
			+
			</button>
		</div>
		<h1 className={css.h1}>Перевод средств в фонд можно осуществить по номеру счета <br></br> 40817 810 5 4177 0023054 (РНКБ Банк) </h1>
	  </div>
	);
}

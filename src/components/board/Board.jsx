import css from "./Board.module.css";
import PlayStation from '../../images/PlayStation.png';
import Xbox from '../../images/Xbox.jpg';
import Counter from "../counter/Counter";

const Board = () => {

    return (
        <div className={css.wrapper}>
            <div className={css.console}>  
                <div>
                    <h2 className={css.consoleTitle}>Sony PlayStation 5</h2>
                    <img className={css.imagePlayStation} src={PlayStation} alt="PlayStation" />
                    <p className={css.p}>Технические характеристики: <br/>
                        Процессор — 8-ядерный AMD Zen 2, 3,5 ГГц<br/>
                        Графическое ядро — AMD RDNA 2, 10,28 терафлопс<br/>
                        Оперативная память — 16 гигабайт GDDR6,<br/>
                        256 бит (на скорости 446 гигабайт)<br/>
                        Память — SSD, NVME 825 ГБ (на скорости от 5,5 до 9 гигабайт в секунду),<br/>
                        поддержка сторонних   SSD (NVMe)<br/>
                        Дисковод — 4К UHD Blu-Ray<br/>
                        Стоимость ≈ 70000 ₽</p>
                </div>
                <div>
                    <h2 className={css.consoleTitle}>Xbox Series X</h2>
                    <img className={css.imageXbox} src={Xbox} alt="Xbox" />
                    <p className={css.p}>Технические характеристики: <br/>
                        Центральный процессор: 8-ядерный Zen 2 с частотой работы 3,8 ГГц и 3,6 ГГц с SMT<br/>
                        Графическая система: 12 TFLOPS, 52 вычислительных блока,<br/>
                        частота 1,825 ГГц, архитектура RDNA 2<br/>
                        Оперативная память: 16 ГБ GDDR6<br/>
                        Накопитель: SSD на 1 ТБ<br/>
                        Привод: 4K UHD Blu-Ray<br/>
                        Стоимость ≈ 50000 ₽</p>
                </div>
            </div>
            <Counter />
        </div>
    );
};

export default Board;

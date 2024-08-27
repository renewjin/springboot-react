import {useState} from "react";
import axions from "axios";
import '../css/PizzaForm.css';

const PizzaForm = () => {
    const [pizzaName, setPizzaName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const 전달데이터 = {
        name: pizzaName,
        description: description,
        price: price
    }

    // 스프링부터 연결 후 input에 작성한 데이터 전달
    const handleregister = () => {
        axions.post("http://localhost:9090/api/pizza", 전달데이터)
        .then(response => {
            alert("메뉴가 성공적으로 등록되었습니다")
            console.log("데이터 등록 완료")
            setPizzaName('');
            setDescription('');
            setPrice('');
        })
        .catch(error => {
            alert("메뉴가 등록에 실패했습니다")
            console.log("데이터 등록 실패")
        })

        
    }

    return (
        <div className="pizzaform-container">
            <label>
                메뉴 이름 :
                <input type="text" value={pizzaName} onChange={(e) => setPizzaName(e.target.value)}/>
            </label>
            <label>
                메뉴 설명 :
                {/*<textarea value={description} onChange={(e) => setDescription(e.target.value)} />*/}
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                메뉴 가격 :
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <button onClick={handleregister}>등록하기</button>
        </div>
    )
}
export default PizzaForm;
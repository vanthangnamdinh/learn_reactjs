
import './App.css';
import {useEffect, useState} from 'react';

const products=[
  {
      id:1,
      realname:'iPhone9',
      name:'iPhone9',
      cost: 700,
  },
  {
      id:2,
      realname:'Samsung',
      name:'Samsung',
      cost: 400
  },
  {
      id:3,
      realname:'Nokia',
      name:'Nokia',
      cost: 100
  },
  {
      id:4,
      realname:'Sony Xperia',
      name:'Sony',
      cost: 450
  },
  {
      id:5,
      realname:'Motorola',
      name:'Motorola',
      cost: 180
  },
  {
      id:6,
      realname:'oppo',
      name:'oppo',
      cost: 600
  },
  {
      id:7,
      realname:'bPhone',
      name:'bPhone',
      cost: 90
  }

]

const App =() =>{
    const [amount,setAmount]=useState([0,0,0,0,0,0,0])
    const [checkd,setCheckd]=useState([false,false,false,false,false,false,false])
    const [sumproduct,setSumproduct]=useState([0,0,0,0,0,0,0])
    const [sum,setSum]=useState(0)
    
    const handleClickCheckbox =(position)=>{
        if(checkd[position]){
            const updateSumproduct=sumproduct.map((item,index)=>
                index===position?0:item
            );
            setSumproduct(updateSumproduct);
        }else{
            const updateSumproduct=sumproduct.map((item,index)=>
                index===position?amount[index]*products[index].cost:item
            );
            setSumproduct(updateSumproduct);
        }
        const updateCheckd=checkd.map((check,index)=>
            index===position?!check:check
        );
        setCheckd(updateCheckd);
    }
    const handleClickNumber=(e,position)=>{
        const updateAmount =amount.map((item,index)=>
            index===position?item=parseInt(e.target.value):item
        )
        setAmount(updateAmount)
        const updateSumproduct=sumproduct.map((item,index)=>
            index===position?parseInt(e.target.value)*products[index].cost:item
        );
        setSumproduct(updateSumproduct);
    }
    useEffect(()=>{
        let Sum=0
            sumproduct.map((product)=>
                Sum+=product
            )
        setSum(Sum)
    },[sumproduct])
    return (
        <div className='Container'>
            <table>
                <caption><div>Bán Hàng</div></caption>
                    <tbody>
                    <tr>
                        <td className="box"><input type="checkbox"/></td>
                        <td>Hàng Hoá</td>
                        <td>Đơn Giá</td>
                        <td>Số Lượng</td>
                        <td>Thành tiền</td>
                    </tr>
                    {products.map((product,index)=>
                    <tr key={index}>
                        <td className={"box"}>
                            <input 
                            id={`${product.name}-check`}
                            type={"checkbox"}
                            onChange={()=>handleClickCheckbox(index)}
                            />
                        </td>
                        <td>
                            {product.realname}
                        </td>
                        <td>
                            {product.cost}
                        </td>
                        <td>
                            <input 
                            type="number"
                            id={`${product.name}-num`}
                            defaultValue={0}
                            onChange={(e)=>handleClickNumber(e,index)}
                        />
                        </td> 
                        <td>
                            {checkd[product.id-1]?( 
                            <div 
                                id={`${product.name}`} 
                            >{product.cost*amount[product.id-1]}
                            </div>)
                            :null}
                        </td>
                    </tr>
                    )}
                    <tr>
                    <td colSpan ="4" style={{alignItems: "center"}} >
                        <div style={{textAlign: "center"}}>
                            Tổng
                        </div>
                    </td>
                    <td>
                        <div style={{textAlign: "center"}} id="Sum">
                            {sum}
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;

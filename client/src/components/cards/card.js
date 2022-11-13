
import './card.scss'

export const Card = ({products}) => {

     

    return (
        <>
        <input className='search' placeholder='Search '/> 
        <div className='flex-container'>

        <div className='filters'>
            <h3>Choose your variants</h3>
            <hr/>
            <ul>
                
                <li> Sport <input  type="checkbox"></input></li>
                <li> Sport <input  type="checkbox"></input></li>
                <li> Sport <input  type="checkbox"></input></li>
                <li> Sport <input  type="checkbox"></input></li>
                <li> Sport <input  type="checkbox"></input></li>
                <li> Sport <input  type="checkbox"></input> </li>
                
            </ul>
            <div className='filters-name'>
                Make your choice more confidient <br/>
              
                []<br/>
                []<br/>
                []<br/>
                []<br/>
            </div>
            
        <div className='filter-color'>
        Make your choice more confidient <br/>
                []<br/>
                []<br/>
                []<br/>
                []<br/>
        </div>
          
        </div>

     

      
      
        <ul className="cards">
          {  products.map((elem ) => 

            <li key = {elem.id}>
            <a href="*" className="card">
            <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-FgfhgR.png"
            className="card__image"
            alt=""
                />
                <div className="card__overlay">
                    <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                    </svg>
                    <img
                        className="card__thumb"
                        src="https://cdn.xxl.thumbs.canstockphoto.com/hand-with-cart-shopping-isolated-icon-vector-illustration-design-clipart-vector_csp77972554.jpg"
                        alt=""
                        />
                    <div className="card__header-text">
                    <h3 className="card__title">{elem.name}</h3>
                    <span className="card__status">{elem.price}</span>
                    </div>
                    </div>
                    <p className="card__description">
                   {elem.description}
                    </p>
                </div>
                </a>
            </li>


                         )}
                </ul>
                </div>
                </>
        )
    }
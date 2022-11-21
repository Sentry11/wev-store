
import './card.scss'

export const Card = ({products}) => {

     

    return (
        <>
        <input className='search' placeholder='Search '/> 


            <select id="select" className='dropdown-select' placeholder='Sort By' defaultValue={"value1"}> 

              <option value="value1">Featured</option>
              <option value="value2" selected>Newest</option>
              <option value="value3">High-low price</option>
              <option value="value4">Low-high price</option>
            </select>


        <div className='flex-container'>

        <div className='filters'>
            <h3>Choose your variants</h3>
            <hr/>
            <ul>
                
                <li> <label>Sport </label> <input  type="checkbox"></input></li>
                <li> <label>Sport </label> <input  type="checkbox"></input></li>
                <li> <label>Sport </label> <input  type="checkbox"></input></li>
                <li> <label>Sport </label> <input  type="checkbox"></input></li>
                <li> <label>Sport </label> <input  type="checkbox"></input></li>
                <li> <label>Sport </label> <input  type="checkbox"></input> </li>
                
            </ul>
            <hr/>
            <div className='filters-size'>
            <br/>
              <span>  Make your choice more confidient </span> <br/> <br/>
             
               <button className = 'size-button'>1 </button>
               <button className = 'size-button'>1.5 </button>
               <button className = 'size-button'>2 </button>
               <button className = 'size-button'>2.5 </button>
               <button className = 'size-button'> 3 </button>
               <button className = 'size-button'> 3.5 </button>
               <button className = 'size-button'> 4 </button>
               <button className = 'size-button'> 4.5 </button>
               <button className = 'size-button'> 5 </button>
               <button className = 'size-button'> 5.5 </button>
               <button className = 'size-button'> 6 </button>
               <button className = 'size-button'> 6.5 </button>
               <button className = 'size-button'> 7 </button>
               <button className = 'size-button'> 7.5 </button>
               <button className = 'size-button'> 8 </button>
               <button className = 'size-button'> 8.5 </button>
               <button className = 'size-button'> 9 </button>
               <button className = 'size-button'>  9.5 </button>
               <button className = 'size-button'> 10 </button>
               <button className = 'size-button'> 10.5 </button>
               <button className = 'size-button'> 11 </button>
               <button className = 'size-button'> 11.5 </button>
               <button className = 'size-button'> 12 </button>
               <button className = 'size-button'> 12.5 </button>
               <button className = 'size-button'> 13 </button>
               <button className = 'size-button'> 13.5 </button>
               <button className = 'size-button'> 14 </button>
               <button className = 'size-button'> 14.5 </button>
               <button className = 'size-button'> 15 </button>
               <button className = 'size-button'> 15.5 </button>
               <button className = 'size-button'> 16 </button>

            </div>
            
        <div className='filter-color'>
        <br/>
       <span>  Make your choice more confidient</span>  <br/> <br/>
           <button className = 'filter-button' style = {{backgroundColor: 'red'}}> </button>
               <button className = 'filter-button' style = {{backgroundColor: 'blue'}}> </button>
               <button className = 'filter-button' style = {{backgroundColor: 'grey'}}> </button>
               <button className = 'filter-button' style = {{backgroundColor: 'wheat'}}> </button>
               <button className = 'filter-button' style = {{backgroundColor: 'purple'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: 'black'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: 'white'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: 'yellow'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: 'orange'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: 'brown'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: '#3fefe2'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: '#3aa572'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: '#312ff2'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: '#dfaaea'}}>  </button>
               <button className = 'filter-button' style = {{backgroundColor: '#fe5e5e'}}>  </button>
               <br/> <br/>
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
import React from 'react';
import './footer.css';

const ColorPalette = () => {
    const colors = ['#F0E7DC', '#FFFCF3', '#EED6CA', '#F4C091', '#D79677', '#F7B960', '#B88276', '#96796E', '#E29792', '#E18E8C', '#E59C8D', '#AC615B', '#9A6362', '#544546', '#BAA489', '#92A997', '#76786D', '#62846B', '#63796D', '#9BC1A6', '#77BAE5', '#7DA3B0', '#3E5984', '#424D59', '#AFA9AA', '#96918E', '#535353', '#F1EBED', '#414047'];
    const textColors = ['#AAA196', '#B9B6AD', '#A89084', '#AE7A4B', '#915031', '#B1731A', '#723C30', '#503328', '#9C514C', '#9B4846', '#9F5647', '#7A2F29', '#5E2726', '#867878', '#745E43', '#4C6351', '#303227', '#26482F', '#273D31', '#557B60', '#31749F', '#375D6A', '#142752', '#747F8B', '#696364', '#504B48', '#858585', '#ABA5A7', '#737279'];
    const colorName = ['White', 'Light Cream', 'Sicilia', 'Buttercup', 'Jaisalmer Yellow', 'Sunshine Yellow', 'Mushroom', 'Fawn', 'Nursery Pink', 'Dusky Rose', 'Peach', 'Terracotta', 'Deep Red', 'Chocolate', 'Macao', 'Crazy Green', 'Kotah Green', 'Mint', 'Dark Green', 'Jade Green', 'Sea Blue', 'Blue Lagoon', 'Chinese Blue', 'Dark Blue', 'Silver Grey', 'Grey', 'Solomen Grey', 'Light Silver', 'Black'];
    
    return (
        <div className='color-palette'>
            {colors.map((color, index) => (
                <div key={index}
                    className='rectangle'
                    style={{backgroundColor: color}}>
                        <span className='color-name' style={{color: textColors[index]}}>{colorName[index]}</span>
                    </div>
            ))}
        </div>
    )
}

export default ColorPalette;
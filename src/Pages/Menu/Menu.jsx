import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img="https://i.ibb.co/JKWhM9G/Rectangle-1.png" title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER"></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title="dessert" img="https://i.ibb.co/ThvXDd0/istockphoto-1472804671-612x612.jpg"></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title="pizza" img="https://i.ibb.co/bdBpW0x/bulbul-ahmed-3sv-Nm-Qj8-X8-unsplash.jpg"></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title="soup" img="https://i.ibb.co/hB3SFg9/ella-olsson-fx-JTl-g-Dh28-unsplash.jpg"></MenuCategory>
            {/* pizza */}
            <MenuCategory items={salad} title="salad" img="https://i.ibb.co/27zLq3r/yoav-aziz-Ai-HJi-RCw-B3w-unsplash.jpg"></MenuCategory>
        </div>
    );
};

export default Menu;
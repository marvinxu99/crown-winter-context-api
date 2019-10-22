import React, { useContext } from 'react';

//import { ReactComponent as Logo } from '../../assets/crown.svg';
//import { ReactComponent as Logo } from '../../assets/images/winter-resized.svg';
import winter2 from '../../assets/images/winter-winter.jpeg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv,
  LogoImg 
} from './header.styles';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';


const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return(
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImg src= { winter2 } />
        <span>Winter Beautiful</span>
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/admin'>
          ADMIN
        </OptionLink>
        <OptionLink to='/redux'>
          REDUX
        </OptionLink>
        <OptionLink to='/home'>
          HOME
        </OptionLink>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>       
        { /* Logic for displaying SIGN OUT or SIGN IN */
          currentUser ?
          <OptionDiv as='div' onClick={()=>auth.signOut()}>
            SIGN OUT
          </OptionDiv>
          :  
          <OptionLink to='/signin'>
              SIGN IN
          </OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { 
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
}

export default Header;
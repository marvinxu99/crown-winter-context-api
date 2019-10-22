import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import { ReactComponent as Logo } from '../../assets/crown.svg';
//import { ReactComponent as Logo } from '../../assets/images/winter-resized.svg';
import winter2 from '../../assets/images/winter-winter.jpeg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, LogoImg } from './header.styles';

import CurrentUserContext from '../../contexts/current-user/current-user.context';

const Header = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);

  return(
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImg src= { winter2 } />
        <span>Winter is beautiful.</span>
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
          <OptionLink as='div' onClick={()=>auth.signOut()}>
            SIGN OUT
          </OptionLink>
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
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
}); 

export default connect(mapStateToProps)(Header);
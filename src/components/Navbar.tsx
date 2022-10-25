import { Navbar as NavbarBS, Container , Nav, Button}from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const {cartQuantity, openCart} = useShoppingCart()

    return (
        <NavbarBS className='bg-white shadow-sm mb-3' sticky="top">
            <Container>
                    <Nav className="me-auto" >
                        <Nav.Link to={'/'} as={NavLink}>
                            Home
                        </Nav.Link>

                        <Nav.Link to={'/store'} as={NavLink}>
                            Store
                        </Nav.Link>

                        <Nav.Link to={'/about'} as={NavLink}>
                            About
                        </Nav.Link>
                    </Nav>


                {
                    cartQuantity > 0 && (
                        <Button 
                        onClick={openCart}
                        style={{width: '3rem', height: '3rem', position: 'relative'}} variant='outlint-primary'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="currentColor" stroke="none">
                        <path d="M70 4818 c-92 -62 -90 -182 4 -252 26 -20 42 -21 351 -24 289 -3 324
                        -5 338 -20 11 -12 629 -2276 692 -2534 7 -26 5 -28 -23 -28 -47 0 -147 -35
                        -201 -69 -310 -199 -284 -650 47 -814 l85 -42 165 -3 c187 -4 169 8 138 -102
                        -32 -111 -16 -249 42 -368 36 -76 150 -190 223 -226 170 -82 357 -75 514 19
                        109 66 185 160 226 282 38 111 31 265 -17 381 -5 9 93 12 466 12 l472 0 -7
                        -22 c-28 -91 -36 -133 -36 -208 0 -145 50 -266 153 -368 101 -102 223 -152
                        368 -152 237 0 438 152 505 383 28 97 20 245 -19 337 -14 34 -13 35 15 52 96
                        59 90 202 -11 255 l-43 23 -1539 0 c-1511 0 -1539 0 -1577 20 -114 57 -112
                        239 2 293 32 16 158 17 1515 17 959 0 1498 4 1533 10 115 22 219 101 268 205
                        12 26 108 419 213 873 209 910 205 882 153 987 -28 59 -73 103 -138 137 -42
                        23 -46 23 -592 29 -302 4 -1061 8 -1685 9 -624 1 -1200 5 -1280 9 l-145 6 -91
                        337 c-49 185 -99 355 -109 379 -28 60 -105 135 -172 167 l-58 27 -355 3 -356
                        3 -34 -23z m1704 -1208 l232 0 42 -322 c23 -178 42 -331 42 -340 0 -17 -20
                        -18 -288 -18 l-288 0 -88 323 c-48 178 -90 334 -93 347 l-6 23 108 -6 c59 -4
                        212 -7 339 -7z m1196 -340 l0 -340 -285 0 -284 0 -6 33 c-5 32 -85 631 -85
                        642 0 3 149 5 330 5 l330 0 0 -340z m960 323 c-1 -10 -20 -162 -43 -338 l-43
                        -320 -287 -3 -287 -2 0 340 0 340 330 0 c308 0 330 -1 330 -17z m885 -15 c-3
                        -13 -37 -160 -75 -327 -39 -167 -73 -307 -76 -312 -3 -5 -120 -9 -260 -9 -196
                        0 -254 3 -254 13 0 6 19 157 42 335 l42 322 293 0 293 0 -5 -22z m-2637 -1265
                        c23 -175 42 -326 42 -335 0 -17 -16 -18 -194 -18 -107 0 -206 4 -220 10 -15 5
                        -33 24 -41 42 -14 32 -165 586 -165 607 0 8 81 11 268 11 l268 0 42 -317z
                        m792 -18 l0 -335 -220 0 -220 0 -4 23 c-5 21 -86 628 -86 641 0 3 119 6 265 6
                        l265 0 0 -335z m830 320 c0 -23 -80 -628 -85 -642 -3 -10 -57 -13 -225 -13
                        l-220 0 0 335 0 335 265 0 c231 0 265 -2 265 -15z m790 2 c0 -21 -129 -579
                        -141 -608 -6 -15 -22 -31 -35 -38 -28 -12 -394 -16 -394 -4 0 16 82 639 85
                        651 6 18 485 18 485 -1z m-2310 -1620 c132 -67 157 -253 47 -355 -54 -49 -102
                        -65 -178 -60 -79 6 -134 43 -171 117 -102 200 100 399 302 298z m1845 22 c92
                        -23 166 -118 166 -214 0 -130 -92 -224 -219 -225 -131 0 -221 91 -222 223 0
                        71 24 121 81 170 59 51 118 65 194 46z"/>
                        </g>
                    </svg>

                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: 'white', 
                            height: '1.5rem', 
                            width: '1.5rem',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            transform: 'translate(25%, 25%)'
                            }}>
                        {cartQuantity}
                    </div> 

                    </Button>
                    )
                }
                   

            </Container>

        </NavbarBS>
    )
}
import React, {useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';


const NavbarDef = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" dark expand="md">

				<NavbarBrand href="/">MoviePovery</NavbarBrand>

				<NavbarToggler onClick={toggle}/>

				<Collapse isOpen={isOpen} navbar>

					<Nav className="mr-auto" navbar>

						<NavItem>
							<NavLink href="/library/">Libreria</NavLink>
						</NavItem>

						<NavItem>
							<NavLink href="/search/">Cerca un film</NavLink>
						</NavItem>

					</Nav>

				</Collapse>

			</Navbar>
		</div>
	);
};

export default NavbarDef;

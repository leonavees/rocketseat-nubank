import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
    Container,
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText,
} from './styles';

function Menu({ translateY }) {
    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1],
                }),
            }}
        >
            <Code>
                <QRCode
                    value="https://rocketseat.com.br"
                    logoSize={80}
                    backgroundColor="#8a05be"
                    color="#fff"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}

export default Menu;

import styled from 'styled-components'
import * as palette from '../../palette.js';

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1150px;
    ${palette.lg} {
        max-width: 980px;
    }
    ${palette.md} {
        max-width: 700px;
    }
`;

export default Container
import styled from "styled-components";
import { Tabs } from 'antd';

export const StyledTabs = styled(Tabs) `
    margin-left: 2rem ;
    font-weight: bold;
    color: gray;
    .ant-tabs-nav {
        ::before {
            left: -2rem;
            bottom: -1px;
        }
    }
`;
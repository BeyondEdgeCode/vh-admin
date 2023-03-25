import React from 'react';
import { runVM } from '../../utils/runVM';
import { Layout } from './layout';
import { newLayoutVM } from './layout.view-model';

export const LayoutContainer = () => {
    runVM(newLayoutVM());
    return React.createElement(Layout, {});
};

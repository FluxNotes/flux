import React from 'react';
import Visualizer from './Visualizer';
import LongitudinalViewVisualizerTable from './LongitudinalViewVisualizerTable';
import _ from 'lodash';

class LongitudinalViewVisualizer extends Visualizer {
    constructor(props){
        super(props);
        console.log(props);
        const a = [1, 2, 4, 4, 3, 3];
        const b = _.uniq(a);
        const c = b.sort(function (n1, n2) {
            if(n1>n2){
                return -1;
            } else if(n1 < n2){
                return 1;
            } else{
                return 0;
            }
        })
        console.log(c);
    }
    render() {
        return (
            <div>
                <LongitudinalViewVisualizerTable/>
            </div>
        );
    }
}

export default LongitudinalViewVisualizer;
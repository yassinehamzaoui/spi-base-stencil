import { Component } from '@stencil/core';


@Component({
    tag: 'spi-root',
    styleUrl: 'spi-root.scss',
    shadow: true
})
export class SpiRoot {
    
    render() {
        return (
            <p>Welcome in SPI ADM !</p>
        );
    }
}
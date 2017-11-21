import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import Croppie from 'croppie';
import { CroppieOptions, ResultOptions } from 'croppie';
export declare type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';
export interface TempResultOptions extends ResultOptions {
    type?: Type;
    size?: any;
}
export declare class NgxCroppieComponent implements OnInit {
    imageEdit: ElementRef;
    croppieOptions: CroppieOptions;
    imageUrl: string;
    bind: (img: string) => void;
    outputFormatOptions: TempResultOptions;
    result: EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement>;
    _croppie: Croppie;
    ngOnInit(): void;
    newResult(): void;
}

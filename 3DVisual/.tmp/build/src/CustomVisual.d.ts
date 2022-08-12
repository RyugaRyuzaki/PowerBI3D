import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import { UploadForm } from "./component";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import * as THREE from 'three';
export declare class CustomVisual implements IVisual {
    host: IVisualHost;
    private options;
    static Config: {
        default_color: THREE.Color;
        opacity_of_unselected_objects: number;
        color1: THREE.Color;
        color2: THREE.Color;
        color3: THREE.Color;
    };
    private visualSettings;
    private updateCount;
    private textNode;
    scene: THREE.Scene;
    private camera;
    private renderer;
    private controls;
    private model_loaded;
    upload_form: UploadForm;
    private target;
    private reactRoot;
    static Instance: CustomVisual;
    private constructor_options;
    private first_load;
    private path;
    static Instances: CustomVisual[];
    constructor(options: VisualConstructorOptions);
    private _construct_three_scene;
    static Load3DModel(path: string): void;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    update(options: VisualUpdateOptions): void;
    private setCamera;
    private visualTransform;
    private getColumnColorByValue;
}

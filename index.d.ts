import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).
 * @usage
 * ```typescript
 * import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
 *
 * constructor(private bluetoothSerial: BluetoothSerial) { }
 *
 *
 * // Write a string
 * this.bluetoothSerial.write('hello world').then(success, failure);
 *
 * // Array of int or bytes
 * this.bluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * this.bluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * this.bluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class BluetoothSerial extends IonicNativePlugin {
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    connect(btName, macAddress_or_uuid: string): Observable<any>;
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    connectInsecure(btName, macAddress: string): Observable<any>;
    /**
     * Disconnect from the connected device
     * @returns {Promise<any>}
     */
    disconnect(btName): Promise<any>;
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    write(btName, data: any): Promise<any>;
    /**
     * Gets the number of bytes of data available
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    available(btName): Promise<any>;
    /**
     * Reads data from the buffer
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    read(btName): Promise<any>;
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise<any>} returns a promise
     */
    readUntil(btName, delimiter: string): Promise<any>;
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    subscribe(btName, delimiter: string): Observable<any>;
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable<any>} returns an observable
     */
    subscribeRawData(btName): Observable<any>;
    /**
     * Clears data in buffer
     * @returns {Promise<any>} returns a promise when completed
     */
    clear(btName): Promise<any>;
    /**
     * Lists bonded devices
     * @returns {Promise<any>} returns a promise
     */
    list(btName): Promise<any>;
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise<any>} returns a promise
     */
    isEnabled(btName): Promise<any>;
    /**
     * Reports the connection status
     * @returns {Promise<any>} returns a promise
     */
    isConnected(btName): Promise<any>;
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise<any>} returns a promise
     */
    readRSSI(btName): Promise<any>;
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise<any>} returns a promise
     */
    showBluetoothSettings(btName): Promise<any>;
    /**
     * Enable Bluetooth on the device
     * @returns {Promise<any>} returns a promise
     */
    enable(btName): Promise<any>;
    /**
     * Discover unpaired devices
     * @returns {Promise<any>} returns a promise
     */
    discoverUnpaired(btName): Promise<any>;
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable<any>} Returns an observable
     */
    setDeviceDiscoveredListener(btName): Observable<any>;
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    setName(btName, newName: string): void;
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    setDiscoverable(btName, discoverableDuration: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BluetoothSerial, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<BluetoothSerial>;
}

//# sourceMappingURL=index.d.ts.map

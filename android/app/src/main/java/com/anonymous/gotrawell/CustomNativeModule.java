package com.anonymous.gotrawell;

public class CustomNativeModule extends ReactContextBaseJavaModule {

  public static void onEventReceived(Context context, Intent intent) {
    WritableMap params;
    Bundle extras = intent.getExtras();
    if (extras != null) {
      try {
        params = Arguments.fromBundle(extras);
      } catch (Exception e) {
        params = Arguments.createMap();
      }
    } else {
      params = Arguments.createMap();
    }

    ReactContext reactContext = ((CustomReactNativeApplication) context.getApplicationContext())
      .getReactContext();

    if (reactContext != null) {
      reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit("broadcaster-data-received", params);
    }
  }
}
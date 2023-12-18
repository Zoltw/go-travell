package com.anonymous.gotrawell;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class CustomBroadcastReceiver extends BroadcastReceiver {
  @Override
  public void onReceive(Context context, Intent intent) {
    CustomNativeModule.onEventReceived(context, intent);
  }
}
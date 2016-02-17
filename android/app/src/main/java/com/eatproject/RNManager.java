package com.eatproject;

import android.app.Application;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * @author <a href="mailto:sam@tradehero.mobi"> Sam Yu </a>
 */
public class RNManager {

    private static ReactInstanceManager gReactInstanceManager;

    public synchronized static ReactInstanceManager getInstanceManager(Application application) {
        if (gReactInstanceManager == null) {
            ReactInstanceManager.Builder builder = ReactInstanceManager.builder()
                    .setApplication(application)
                    .setJSMainModuleName("index.android")
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.BEFORE_RESUME);

            List<ReactPackage> packages = Arrays.<ReactPackage>asList(
                    new MainReactPackage()
            );

            for (ReactPackage reactPackage : packages) {
                builder.addPackage(reactPackage);
            }

            String jsBundleFile = null;

            if (jsBundleFile != null) {
                builder.setJSBundleFile(jsBundleFile);
            } else {
                builder.setBundleAssetName("index.android.bundle");
            }

            gReactInstanceManager = builder.build();
        }

        return gReactInstanceManager;
    }
}

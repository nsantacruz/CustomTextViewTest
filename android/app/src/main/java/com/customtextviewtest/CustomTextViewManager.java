package com.customtextviewtest;

import android.os.Build;
import android.text.Html;
import android.text.Spanned;

import androidx.appcompat.widget.AppCompatTextView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;

public class CustomTextViewManager extends SimpleViewManager<AppCompatTextView> {
    public static final String REACT_CLASS = "RCTCustomTextView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public AppCompatTextView createViewInstance(ThemedReactContext context){
        AppCompatTextView view = new AppCompatTextView(context);
        view.setTextIsSelectable(true);
        return view;
    }

    @ReactProp(name = "text")
    public void setText(AppCompatTextView view, String text) {
        Spanned spanned;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            spanned = Html.fromHtml(text, Html.FROM_HTML_MODE_COMPACT);
        } else {
            spanned = Html.fromHtml(text);
        }
        view.setText(spanned);
    }
}

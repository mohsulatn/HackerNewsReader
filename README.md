# **HackerNewsReader**
A tutorial based sample app developed in ReactNative. 

The intent of the app is to read firebase API of HackerNews (https://news.ycombinator.com/) and show it in the app. Some features are added to tap on the news and show details.


###The Structure:

<i class="icon-hdd"></i>**Two major components:**

 1. NewsList [_components/news-list.js_]
 2. NewsDetails [_components/news-details.js_]

<i class="icon-hdd"></i>**One helper for** ``http`` calls  [_src/api.js_]

<i class="icon-hdd"></i>**Built-in components used:**

 - Text [_for showing texts_]
 - View [_the main app view component_]
 - StyleSheet [_for enabling usage of react permitted css_]
 - Navigator [_for enabling navigation between list page and details page_]
 - WebView [_for showing web content to app view_]
 - ListView [_for showing news list_]
 - ScrollView [_for enabling scrolling in news list_]
 - TouchableHighlight [_for making views respond to touch_]
 - AsyncStorage [_for storing temporary values to local storage_]

<i class="icon-hdd"></i>**Other node package items**:

 - lodash   [_for manipulating strings_]
 - moment   [_for manipulating dates_]
 - react-native-button [_for managing_buttons_]
 - react-native-gifted-spinner [_for showing spinners while data is loading from API_]

<i class="icon-hdd"></i>**Future Plan**:

 - Furnishing the codebase - introduce a ``good practice`` pattern
 - Make the transitions within pages and list items smooth
 - Publish ``APK`` file and include here [_if not be able to upload to app store_)]

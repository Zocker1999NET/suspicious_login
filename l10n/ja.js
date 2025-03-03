OC.L10N.register(
    "suspicious_login",
    {
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "アカウントへの新しいログインが検出されました。 IP アドレス%sは不審なログインに分類されます。このログインがあなたであればこのメッセージは無視して構いません。そうでない場合は、パスワードを変更してください。",
    "Suspicious Login" : "不審なログイン",
    "New login detected" : "新しいログインが検出されました",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "Nextcloudにログインする不審なIPを検出して警告します\n\t",
    "Suspicious login detection" : "不審なログインが検出されました",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "このインスタンスで不審ログインの検知アプリケーションが有効になっています。ユーザーが正常にログインしたIPアドレスを追跡し、疑わしいIPアドレスから新しいログインがあった場合に警告する分類モデルを構築します。",
    "Training data statistics" : "統計データをトレーニング",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "現在、アプリは {total} 回のログイン(クライアント接続を含む)を記録しており、そのうち {distinct} 回は別々の(IPとUID)の組み合わせになっている。",
    "Classifier model statistics" : "分類統計モデル",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "分類モデルはまだトレーニングされていません。これは、最近アプリを有効にしたばかりです。モデルを正しくトレーニングするには良いデータが必要なので、アプリは少なくとも {days} 日はログイン情報がたまるまで必要です。",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "評価中に最新のモデル ({time} 回トレーニングされたもの) で全ての疑わしいログイン (recall)うちの {recall}% を捕捉しました。その中で疑わしいと分類されたログインの {precision}% は実際に疑わしい(正確性)ものです。次の図は、従来のモデルのパフォーマンスを視覚化したものです。",
    "Precision" : "精度",
    "Recall" : "呼び出し"
},
"nplurals=1; plural=0;");

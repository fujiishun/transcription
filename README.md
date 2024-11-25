# 概要

文字起こしアプリ。Python と React を使用

# 構築手順

## ホスト側環境構築

以下をダウンロードしインストール

- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [VSCode](https://code.visualstudio.com/download)
  ※拡張機能「Remote Development」を導入すること

## 環境構築

以下のコマンドで必要なファイルを配置する

```
git clone https://github.com/fujiishun/transcription.git
```

## VSCode の起動

```
cd transcription
code .
```

※フロントエンドは vscode 上で以下のようなエラーが発生するが、docker のログ等にエラーがなくビルドが通っている場合は問題ないと判断してよい

```
インポートエラー（Cannot find module 'react' or its corresponding type declarations.）
propsの型定義エラー（Binding element 'user' implicitly has an 'any' type.）
jsxのエラー（Cannot find module 'react/jsx-runtime' or its corresponding type declarations.）
```

※気になる場合は以下サイトを参考にコンテナにアタッチして使用することで回避可能
https://qiita.com/nonamenme/items/43243586c81cbbb9b08b

## transcription 起動

```
docker compose build
docker compose up -d
```

※コンテナ起動後、ブラウザで http://localhost:3000 へアクセス

## データ&マッパー準備

Migrate 作成コマンド

```
docker-compose exec backend python manage.py makemigrations
```

Migrate 適用コマンド

```
docker-compose exec backend python manage.py migrate
```

seed 適用コマンド

```
docker-compose exec backend python manage.py loaddata seed.json
```

DB をクリアにするコマンド（※seed の入れ直しが必要。Migrate は不要）

```
docker-compose exec backend python manage.py flush --noinput
```

DB 接続コマンド

```
docker compose exec db bash
psql -U root -d transcription_db
```

## テスト

python test コマンド(※テスト作成時はカバレッジ 80%以上を目安にする)

```
docker-compose exec backend pytest -c app/tests/pytest.ini --cov=app/tests --cov-report=term-missing
```

## サンプルユーザー

```
ID: tanaka
PASS: Password1!
```

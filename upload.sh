#!/bin/bash

# 1. 모든 변경 사항 추가
git add .

# 2. 커밋 메시지 생성 (현재 날짜와 시간 포함)
commit_message="Auto-upload: $(date '+%Y-%m-%d %H:%M:%S')"

# 3. 변경 사항이 있는지 확인 후 커밋
if git diff-index --quiet HEAD --; then
    echo "업로드할 변경 사항이 없습니다."
else
    git commit -m "$commit_message"
    
    # 4. GitHub에 푸시
    git push origin main
    echo "----------------------------------------"
    echo "✅ GitHub 업로드 완료! ($commit_message)"
    echo "----------------------------------------"
fi

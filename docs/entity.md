# 全体のエンティティ

```mermaid
---
title: シフトに関するエンティティ
---
erDiagram
    Shift {
        string id
        date requestDeadline
    }

    ShiftRequirement {
        string id
        integer staffCount
        Period period
    }

    ShiftRequest {
        string id
        string staffId
        string shiftId
    }

    ShiftRequestPeriod {
        string id
        string shiftRequestId
        Period period
    }

    ShiftAssignment {
        string id
        string staffId
        string shiftId
        Period period
    }

    Staff {
        string id
        string name
        string roleId
    }

    Role {
        string id
        string name
    }

    Shift ||--|{ ShiftRequirement : "所有"
    Shift ||--o{ ShiftRequest : "所有"
    Shift ||--o{ ShiftAssignment : "所有"
    ShiftRequest ||--o{ ShiftRequestPeriod : "所有"

    ShiftAssignment }o--|| Staff : "所有"
    ShiftRequest }o--|| Staff : "所有"
    Staff ||--|{ Role : "所属"
```

## Shift

シフトを表すエンティティ。

## ShiftRequirement

シフトの必要人数を表すエンティティ。

## ShiftRequest

シフトの希望を表すエンティティ。

## ShiftAssignment

シフトの割り当てを表すエンティティ。

## Staff

スタッフを表すエンティティ。

## Role

役割を表すエンティティ。


# シフト希望に関するエンティティ

シフト希望を作成するときのエンティティ。

```mermaid
---
title: シフト希望に関するエンティティ
---

erDiagram
    ShiftRequestPreview }o--|| ShiftRequestDraft : ""
    ShiftRequestDraftRequirement }o--|| ShiftRequestDraft : ""

    ShiftRequestDraft ||--o{ ShiftRequestDraftRule : ""
    ShiftRequestDraftRule ||--o{ ShiftRequestRuleException : ""
    ShiftRequestDraft ||--o{ ShiftRequestPeriodDraft : ""


```

## ShiftRequestDraft

シフト希望の下書きを表すエンティティ。

## ShiftRequestDraftRequirement

既存のシフト要件を読み込んだ場合はそこから生成される。
あるいは期間を指定した場合は自動で作成される。

## ShiftRequestDraftRule

シフト希望の下書きのルールを表すエンティティ。
特定の曜日の繰り返しなどを表現する。

## ShiftRequestRuleException

シフト希望のルールの例外を表すエンティティ。
シフト希望の下書きのルールの例外としてルールを打ち消す。

## ShiftRequestPeriodDraft

シフト希望の下書きの期間を表すエンティティ。
ルールを使わない場合など直接記述する。

# Entity-Relationship (ER) Diagram - AirBnB Database

## Entities and Relationships Identified

### 1. Entities with Attributes

#### User Entity
```
┌─────────────────────┐
│        USER         │
├─────────────────────┤
│ • user_id (PK)      │
│ • first_name        │
│ • last_name         │
│ • email (UNIQUE)    │
│ • password_hash     │
│ • phone_number      │
│ • role (ENUM)       │
│ • created_at        │
└─────────────────────┘
```

#### Property Entity
```
┌─────────────────────┐
│      PROPERTY       │
├─────────────────────┤
│ • property_id (PK)  │
│ • host_id (FK)      │
│ • name              │
│ • description       │
│ • location          │
│ • price_per_night   │
│ • created_at        │
│ • updated_at        │
└─────────────────────┘
```

#### Booking Entity
```
┌─────────────────────┐
│       BOOKING       │
├─────────────────────┤
│ • booking_id (PK)   │
│ • property_id (FK)  │
│ • user_id (FK)      │
│ • start_date        │
│ • end_date          │
│ • total_price       │
│ • status (ENUM)     │
│ • created_at        │
└─────────────────────┘
```

#### Payment Entity
```
┌─────────────────────┐
│       PAYMENT       │
├─────────────────────┤
│ • payment_id (PK)   │
│ • booking_id (FK)   │
│ • amount            │
│ • payment_date      │
│ • payment_method    │
└─────────────────────┘
```

#### Review Entity
```
┌─────────────────────┐
│       REVIEW        │
├─────────────────────┤
│ • review_id (PK)    │
│ • property_id (FK)  │
│ • user_id (FK)      │
│ • rating            │
│ • comment           │
│ • created_at        │
└─────────────────────┘
```

#### Message Entity
```
┌─────────────────────┐
│       MESSAGE       │
├─────────────────────┤
│ • message_id (PK)   │
│ • sender_id (FK)    │
│ • recipient_id (FK) │
│ • message_body      │
│ • sent_at           │
└─────────────────────┘
```

### 2. Relationships

#### User ↔ Property (Host Relationship)
- **Cardinality**: 1:N (One User can host Many Properties)
- **Relationship**: "HOSTS"
- **Connection**: User.user_id → Property.host_id

#### User ↔ Booking (Guest Relationship)
- **Cardinality**: 1:N (One User can make Many Bookings)
- **Relationship**: "MAKES"
- **Connection**: User.user_id → Booking.user_id

#### Property ↔ Booking
- **Cardinality**: 1:N (One Property can have Many Bookings)
- **Relationship**: "HAS"
- **Connection**: Property.property_id → Booking.property_id

#### Booking ↔ Payment
- **Cardinality**: 1:N (One Booking can have Many Payments)
- **Relationship**: "PAYS_FOR"
- **Connection**: Booking.booking_id → Payment.booking_id

#### User ↔ Review
- **Cardinality**: 1:N (One User can write Many Reviews)
- **Relationship**: "WRITES"
- **Connection**: User.user_id → Review.user_id

#### Property ↔ Review
- **Cardinality**: 1:N (One Property can receive Many Reviews)
- **Relationship**: "RECEIVES"
- **Connection**: Property.property_id → Review.property_id

#### User ↔ Message (Sender)
- **Cardinality**: 1:N (One User can send Many Messages)
- **Relationship**: "SENDS"
- **Connection**: User.user_id → Message.sender_id

#### User ↔ Message (Recipient)
- **Cardinality**: 1:N (One User can receive Many Messages)
- **Relationship**: "RECEIVES"
- **Connection**: User.user_id → Message.recipient_id

## Draw.io Implementation Instructions

### Step 1: Setup
1. Open Draw.io (https://app.diagrams.net/)
2. Choose "Blank Diagram"
3. Select "Entity Relationship" from the template library

### Step 2: Create Entities
1. **Add Entity Rectangles**: Use rectangles for each entity
2. **Add Entity Headers**: Use filled rectangles with entity names
3. **Add Attributes**: List all attributes with proper notations:
   - **(PK)** for Primary Keys
   - **(FK)** for Foreign Keys
   - **(UNIQUE)** for unique constraints
   - **(ENUM)** for enumerated values

### Step 3: Create Relationships
1. **Add Diamond Shapes**: Use diamonds for relationship names
2. **Connect with Lines**: Draw lines from entities to relationships
3. **Add Cardinality**: Mark each end with 1, N, or M
4. **Use Crow's Foot Notation**: If preferred, use crow's foot symbols

### Step 4: Layout Suggestions
```
[USER] ─────HOSTS─────→ [PROPERTY] ─────HAS─────→ [BOOKING]
   │                        │                        │
   │                        │                        │
   └──WRITES──→ [REVIEW] ←──RECEIVES                 │
   │                                                  │
   │                                                  │
   └──SENDS──→ [MESSAGE] ←──RECEIVES                 │
   │                                                  │
   │                                                  │
   └──MAKES─────────────────────────────────────────┘
                                                      │
                                                      │
                                              [PAYMENT] ←──PAYS_FOR
```

### Step 5: Color Coding (Optional)
- **Entities**: Light blue (#E3F2FD)
- **Relationships**: Light orange (#FFF3E0)
- **Primary Keys**: Bold blue text
- **Foreign Keys**: Italic orange text

### Step 6: Export
1. Save as: `airbnb_er_diagram.drawio`
2. Export as PNG: `airbnb_er_diagram.png`
3. Export as PDF: `airbnb_er_diagram.pdf`

## File Structure After Completion
```
alx-airbnb-database/
├── ERD/
│   ├── requirements.md
│   ├── ER_Diagram_Guide.md
│   ├── airbnb_er_diagram.drawio
│   ├── airbnb_er_diagram.png
│   └── airbnb_er_diagram.pdf
└── README.md
```

## Validation Checklist
- [ ] All 6 entities are represented
- [ ] All primary keys are marked
- [ ] All foreign keys are marked and connected
- [ ] Cardinality is shown for all relationships
- [ ] Self-referencing relationship for Message is included
- [ ] All constraints are documented
- [ ] Diagram is readable and well-organized
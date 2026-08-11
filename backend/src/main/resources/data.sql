-- Seed data for Course Evaluation Application
-- Passwords are BCrypt of "password123"

INSERT INTO users (username, password, role) VALUES
('student1', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt.jEqa', 'STUDENT'),
('admin1', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt.jEqa', 'ADMIN');

INSERT INTO courses (name, description, semester) VALUES
('هندسة البرمجيات', 'مبادئ تطوير البرمجيات والـ SDLC', 'الفصل الأول 2024'),
('قواعد البيانات', 'تصميم وإدارة قواعد البيانات العلائقية', 'الفصل الأول 2024'),
('الشبكات الحاسوبية', 'بروتوكولات الشبكات وطبقات OSI', 'الفصل الأول 2024'),
('البرمجة الكائنية', 'مفاهيم OOP بلغة Java', 'الفصل الأول 2024');

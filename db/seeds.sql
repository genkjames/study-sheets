\c study_db

-- Categories

INSERT INTO subjects (subject)
VALUES
('Computer Science'),
('Accounting'),
('Business and Economics'),
('English'),
('Math'),
('Science');

-- Types

INSERT INTO types (type)
VALUES
('multiple choice'),
('short answer'),
('true/false');

-- Worksheets
INSERT INTO worksheets (name, subject_id)
VALUES
('Computer Fundamentals', 1),
('Operating Systems', 1),
('Complete The Sentences', 4);

-- Cards
INSERT INTO cards (question, worksheet_id)
VALUES
('Which of the following languages is more suited to a structured program?', 1),
('A computer assisted method for the recording and analyzing of existing or hypothetical systems is', 1),
('The brain of any computer system is', 1),
('Any type of storage that is used for holding information between steps in its processing is', 1),
('A program component that allows structuring of a program in an unusual way is known as', 1),
('The radian of a number system', 1),
('Which type of system puts the user into direct conversation with the computer through a keyboard?', 1),
('The section of the CPU that selects, interprets and sees to the execution of program instructions', 1),
('The term referring to evacuating the content of some part of the machine is known as', 1),
('A single packet on a data link is known as', 1),
('Sockets are considered a high-level communications scheme', 2),
('The buddy system for allocating kernel memory is very likely to cause fragmentation within the allocated segments', 2),
('What is the correct order of operations for protecting a critical section using binary semaphore?', 2),
('One necessary condition for deadlock is _______, which states that a process must be holding one resource and waiting to acquire additional resources.', 2),
('_______ includes all of the file system structure, minus the actual contents of files.', 2),
('The difference between a program and a process is that a program is an active entity while a process is a passive entity.', 2),
('Which of the following statements is false?', 2),
('_______ occurs when a higher-priority process needs to access a data structure that is currently being accessed by a lower-priority process.', 2),
('The wait-for graph scheme is not applicable to a resource allocation system with multiple instances of each resource type.', 2),
('A significant problem with priority scheduling algorithms is _______.', 2),
('Rajeev failed in the examination because none of his answers were _______ to the questions asked.', 3);

-- Options
INSERT INTO options (card_id, type_id, option, isTrue)
VALUES
(1, 1, 'PL/1', false),
(1, 1, 'FORTRAN', false),
(1, 1, 'BASIC', false),
(1, 1, 'PASCAL', true),
(1, 1, 'None of the above', false),
(2, 1, 'Data transmission', false),
(2, 1, 'Data flow', true),
(2, 1, 'Data capture', false),
(2, 1, 'Data processing', false),
(2, 1, 'None of the above', false),
(3, 2, 'CPU', true),
(4, 1, 'CPU', false),
(4, 1, 'Primary storage', false),
(4, 1, 'Intermediate storage', true),
(4, 1, 'Internal storage', false),
(4, 1, 'None of the above', false),
(5, 2, 'Coroutine', true),
(6, 1, 'Is variable', false),
(6, 1, 'Has nothing to do with digit position value', false),
(6, 1, 'Equals the number of its distinct counting digits', true),
(6, 1, 'Is always an even number', false),
(6, 1, 'None of the above', false),
(7, 1, 'Real time processing', false),
(7, 1, 'Interactive computer', true),
(7, 1, 'Batch processing', false),
(7, 1, 'Time sharing', false),
(7, 1, 'None of the above', false),
(8, 2, 'Control unit', true),
(9, 2, 'Dump', true),
(10, 1, 'Path', false),
(10, 1, 'Frame', true),
(10, 1, 'Block', false),
(10, 1, 'Group', false),
(10, 1, 'None of the above', false),
(11, 3, 'False', true),
(12, 3, 'True', true),
(13, 1, 'release() followed by acquire()', false),
(13, 1, 'acquire() followed by release()', false),
(13, 1, 'wait() followed by signal()', true),
(13, 1, 'signal() followed by wait()', false),
(14, 1, 'hold and wait', true),
(14, 1, 'mutual exclusion', false),
(14, 1, 'circular wait', false),
(14, 1, 'no preemption', false),
(15, 2, 'Metadata', true),
(16, 3, 'False', true),
(17, 1, 'Swapping works in conjunction with virtual memory techniques.', false),
(17, 1, 'Some systems allow for multiple swap spaces (disks).', false),
(17, 1, 'Solaris only swaps pages of anonymous memory.', false),
(17, 1, 'Typically, entire processes are swapped into memory.', true),
(18, 1, 'Priority inversion', true),
(18, 1, 'Deadlock', false),
(18, 1, 'A race condition', false),
(18, 1, 'A critical section', false),
(19, 3, 'True', true),
(20, 2, 'Starvation', true),
(21, 1, 'allusive', false),
(21, 1, 'revealing', false),
(21, 1, 'pertinent', true),
(21, 1, 'referential', false);


export type Question = {
  id: number;
  week: number;
  question: string;
  options: string[];
  answer: string; // exact text of the correct option; multi-answer = sorted options joined by "||"
  multi?: boolean;
};

export const questions: Question[] = [
  // Week 1
  { id: 1, week: 1, question: "Packages in R are useful in collecting sets into a _____ unit?", options: ["Single", "Multiple", "Null", "None of the above"], answer: "Single" },
  { id: 2, week: 1, question: "Descriptive analysis tells about _______?", options: ["Present", "Past", "Future", "None of the above"], answer: "Past" },
  { id: 3, week: 1, question: "To find missing values, you check for NA in R using the is.na() function.", options: ["True", "False"], answer: "True" },
  { id: 4, week: 1, question: "In R, every operation has a call for __________?", options: ["System", "Function", "None of the above"], answer: "Function" },
  { id: 5, week: 1, question: "A matrix is a 3 dimensional rectangular data set.", options: ["True", "False"], answer: "False" },
  { id: 6, week: 1, question: "Which of the following finds the maximum value in the vector x, excluding missing values?", options: ["rm(x)", "all(x)", "max(x, na.rm=TRUE)", "x %in% y"], answer: "max(x, na.rm=TRUE)" },
  { id: 7, week: 1, question: "What will be the output of: a <- c(\"a\",\"b\"); mode(a)?", options: ["Character", "Numeric", "Complex", "Integer"], answer: "Character" },
  { id: 8, week: 1, question: "Function library is used for calling the location where the packages are stored.", options: ["True", "False"], answer: "True" },
  { id: 9, week: 1, question: "Which of the following is not an object of R?", options: ["Calls", "Expressions", "Strings", "names"], answer: "Strings" },
  { id: 10, week: 1, question: "R is mostly used in ____________________", options: ["Problem solving", "Statistics", "Probability", "All of the mentioned"], answer: "All of the mentioned" },

  // Week 2
  { id: 11, week: 2, question: "The choice based conjoint analysis uses linear regression technique for drawing inferences.", options: ["True", "False"], answer: "False" },
  { id: 12, week: 2, question: "Want, refers to things we must have to survive, such as food, water, and shelter.", options: ["True", "False"], answer: "False" },
  { id: 13, week: 2, question: "Can conjoint analysis lead to heuristic based responses as well?", options: ["Yes", "No"], answer: "Yes" },
  { id: 14, week: 2, question: "A ________ measures exactly how many standard deviations above or below the mean a data point is.", options: ["x", "z-score", "mean of residual", "average of residual"], answer: "z-score" },
  { id: 15, week: 2, question: "Conjoint analysis is a popular method of _________ and _________ research that uncovers consumers' preferences.", options: ["Needs, wants", "Wants, Desires", "Testing, Services", "Products, Pricing"], answer: "Products, Pricing" },
  { id: 16, week: 2, question: "A function str() is used for displaying the structure of an R object.", options: ["True", "False"], answer: "True" },
  { id: 17, week: 2, question: "Is it possible to get a negative R-square for equations that do not contain a constant term?", options: ["Yes", "No", "Can't Say"], answer: "Yes" },
  { id: 18, week: 2, question: "_____________ measures how far each number in the set is from the mean and thus from every other number in the set.", options: ["Variance", "z-score", "mean of residual", "average of residual"], answer: "Variance" },
  { id: 19, week: 2, question: "_____________ coefficients are the estimates resulting from a regression analysis that have been standardized so that the variances of dependent and independent variables are 1.", options: ["Mean", "R-Squared", "Beta", "None of the above"], answer: "Beta" },
  { id: 20, week: 2, question: "_____________ avoids issues of sample size by analyzing the discrepancy between the hypothesized model and the population covariance matrix.", options: ["RMSE", "SD", "RMSEA", "Z-values"], answer: "RMSEA" },

  // Week 3
  { id: 21, week: 3, question: "Psychographics refers to 'personality and emotions' based on behavior, linked to purchase choices.", options: ["True", "False"], answer: "True" },
  { id: 22, week: 3, question: "Dividing potential market into smaller, homogenous segments is called positioning.", options: ["True", "False"], answer: "False" },
  { id: 23, week: 3, question: "What's the sequence for effective marketing strategy? (1) Position services to resonate with target market. (2) Find profitable segments and target them. (3) Divide market into potential group segments.", options: ["3,1,2", "3,2,1", "1,2,3", "2,1,3"], answer: "3,2,1" },
  { id: 24, week: 3, question: "Segmentation based on region is a type of demographic segmentation.", options: ["True", "False"], answer: "False" },
  { id: 25, week: 3, question: "Which of the following criteria statements are correct for target markets?", options: ["Only 1 and 5", "Only 1, 2 and 3", "Only 3 and 5", "All of the above"], answer: "All of the above" },
  { id: 26, week: 3, question: "Market segmentation is an act of designing the company's offering and image to occupy a distinctive place in the mind of the target market.", options: ["True", "False"], answer: "False" },
  { id: 27, week: 3, question: "Command _________ is used for hierarchical Clustering.", options: ["hecluster()", "hicluster()", "hclt()", "hcluster()"], answer: "hcluster()" },
  { id: 28, week: 3, question: "Do marketers consider religious or political beliefs and values?", options: ["Yes", "No"], answer: "Yes" },
  { id: 29, week: 3, question: "Which of the following is not a method of customer segmentation?", options: ["Hierarchical clustering", "Ward's method", "K-mean", "None of the above"], answer: "None of the above" },
  { id: 30, week: 3, question: "__________ is the way in which the goods or services of a company differ from its competitors.", options: ["Point of togetherness", "Point of parity", "Point of differentiation", "Point of defense"], answer: "Point of differentiation" },

  // Week 4
  { id: 31, week: 4, question: "If price decreases, in most cases, demand of the product __________", options: ["Decreases", "Increases", "Remains same", "None of these"], answer: "Increases" },
  { id: 32, week: 4, question: "_____________ involves taking models fit on historical data and using them to predict future observations.", options: ["Assumptions", "Forecasting", "Frequency division", "None of the above"], answer: "Forecasting" },
  { id: 33, week: 4, question: "If the price elasticity of demand is unit, then a fall in price __________", options: ["Increases revenue", "Decreases revenue", "Does not change revenue", "None of the above"], answer: "Does not change revenue" },
  { id: 34, week: 4, question: "When there is a complete lack of historical data, or during completely new and unique market conditions, Judgmental forecast is used.", options: ["True", "False"], answer: "True" },
  { id: 35, week: 4, question: "Time series forecasting technique is used to analyze data obtained from past experience.", options: ["True", "False"], answer: "True" },
  { id: 36, week: 4, question: "Forecast error is the difference between the ________ and the _________ value of a time series.", options: ["Predicted, Real", "Real, Predicted", "Present, Past", "None of the above"], answer: "Real, Predicted" },
  { id: 37, week: 4, question: "If the actual demand for a period is 125 units but forecast demand was 110 units. The forecast error is ______", options: ["-15", "+10", "-5", "+15"], answer: "+15" },
  { id: 38, week: 4, question: "_________________ tells you how concentrated the data is around the line of best fit.", options: ["Z-value", "P-value", "T-value", "RMSE"], answer: "RMSE" },
  { id: 39, week: 4, question: "Which of the following are characteristics of 'Market Introduction Stage' in product life cycle? (1) Demand has to be created (2) Makes profit at this stage (3) Slow sales volume to start (4) Initial costs are high", options: ["Only 4", "Only 3 and 4", "Only 1 and 2", "1, 3 and 4"], answer: "1, 3 and 4" },
  { id: 40, week: 4, question: "The term _________________ refers to the length of time a product is introduced to consumers into the market until it's removed from the shelves.", options: ["Production life cycle", "Product life cycle", "Production long cycle", "Product long cycle"], answer: "Product life cycle" },

  // Week 5
  { id: 41, week: 5, question: "Market skimming works when ______ price reflects ______ quality of product.", options: ["High, Low", "Low, High", "High, High", "Low, Low"], answer: "High, High" },
  { id: 42, week: 5, question: "In market skimming, high initial price fetches more competitors to the market.", options: ["True", "False"], answer: "False" },
  { id: 43, week: 5, question: "The pricing objectives are ______________", options: ["Maximum current profit, market share and market skimming", "Survival", "Product quality leadership", "All of the above"], answer: "All of the above" },
  { id: 44, week: 5, question: "If companies face intense competition and are plagued with over-capacity, the pricing objective is ______________", options: ["Survival", "Maximum current profit", "Maximum market share", "None of the above"], answer: "Survival" },
  { id: 45, week: 5, question: "_____________ pricing is a method in which the firm wins loyal customers by charging a fairly low price for a high quality offering.", options: ["Discount", "Value", "Differentiation", "None of the above"], answer: "Value" },
  { id: 46, week: 5, question: "In second degree of price discrimination _______________________________", options: ["The seller charges different amounts to different classes of buyers.", "The seller charges a separate price to each customer depending on the intensity of demand.", "The seller charges less to buyers who buy a larger volume.", "None of the above"], answer: "The seller charges less to buyers who buy a larger volume." },
  { id: 47, week: 5, question: "_________________ is a pricing strategy in which businesses set flexible prices for products or services based on current market demands.", options: ["Price Differentiation", "Mark Pricing", "Dynamic Pricing", "Perceived value pricing"], answer: "Dynamic Pricing" },
  { id: 48, week: 5, question: "Price ___________ is combining several products or services into a single comprehensive package for an all-inclusive reduced price.", options: ["Differentiation", "Value", "Discrimination", "None of the above"], answer: "None of the above" },
  { id: 49, week: 5, question: "Apple charged Rs. 89000 at iPhone X launch in 2017, then kept decreasing the price. Which pricing strategy is this?", options: ["Premium Pricing", "Market Penetration Pricing", "Price Skimming", "Both A & C"], answer: "Price Skimming" },
  { id: 50, week: 5, question: "__________________ of demand is a measure used in economics to show the responsiveness of the quantity demanded of a good or service to a change in its price.", options: ["Price bundling", "Price elasticity", "Price inelasticity", "Price inflation"], answer: "Price elasticity" },

  // Week 6
  { id: 51, week: 6, question: "The revenue of the firm strictly depends upon the ________. It's the only element which generates ________.", options: ["service, loyalty", "Promotion, revenue", "Price, revenue", "Product quality, satisfaction"], answer: "Price, revenue" },
  { id: 52, week: 6, question: "Marketing mix modeling is statistical analysis of sales and data to estimate the impact of various marketing tactics on sales and forecast future tactics.", options: ["True", "False"], answer: "True" },
  { id: 53, week: 6, question: "The key benefit of marketing mix modelling is ________________", options: ["Better allocation of marketing budget", "Better execution of ad campaigns", "Business scenario testing", "All of the above"], answer: "All of the above" },
  { id: 54, week: 6, question: "Optimization shows how easy it is for the supplier and consumer to change their behavior and substitute another good.", options: ["True", "False"], answer: "False" },
  { id: 55, week: 6, question: "The purpose of elasticity is to achieve the best design relative to a set of prioritized criteria or constraints.", options: ["True", "False"], answer: "False" },
  { id: 56, week: 6, question: "_________________ is the tendency for positive impressions of a brand or product in one area to positively influence one's opinion or feelings.", options: ["Halo", "Bullwhip", "Contrast", "None of the above"], answer: "Halo" },
  { id: 57, week: 6, question: "Factors in R are stored as a vector of integer values with a corresponding set of character values to use when the factor is displayed.", options: ["True", "False"], answer: "True" },
  { id: 58, week: 6, question: "By default, function optim in R performs maximization.", options: ["True", "False"], answer: "False" },
  { id: 59, week: 6, question: "Typically marketing mix modelling studies provide insights such as: (1) Contribution by marketing activity (2) ROI by marketing activity (3) Effectiveness of marketing activity (4) Optimal distribution of spends", options: ["Only 1 and 3", "Only 1, 2 and 3", "Only 3 and 4", "All of the above"], answer: "All of the above" },
  { id: 60, week: 6, question: "Trade promotion is aimed at increasing sales in the short term by employing promotion schemes which increase the customer awareness of the business and its products.", options: ["True", "False"], answer: "True" },

  // Week 7
  { id: 61, week: 7, question: "Machine learning is helpful for: (1) Prediction of user behavior (2) Filter irrelevant information (3) Recommendation based on their choice", options: ["Only 1", "Only 1 and 2", "Only 1 and 3", "All 1, 2 and 3"], answer: "All 1, 2 and 3" },
  { id: 62, week: 7, question: "_____________ matrices are used in sequence alignment in which higher scores are given to more-similar characters, and lower or negative scores for dissimilar characters.", options: ["Square", "Scalar", "Identity", "Similarity"], answer: "Similarity" },
  { id: 63, week: 7, question: "Function correlate.test() is used for association/correlation between paired samples.", options: ["True", "False"], answer: "False" },
  { id: 64, week: 7, question: "Function ______________ creates training and testing of data.", options: ["correlation()", "strstr()", "evaluationscheme()", "none"], answer: "evaluationscheme()" },
  { id: 65, week: 7, question: "_____________ filtering is a technique that can filter out items that a user might like on the basis of reactions by similar users.", options: ["Collaborative", "Selective", "Recommendation", "None of the above"], answer: "Collaborative" },
  { id: 66, week: 7, question: "A __________ is a matrix which contains very few non-zero elements.", options: ["Sparse matrix", "Scalar matrix", "Identity matrix", "Similarity matrix"], answer: "Sparse matrix" },
  { id: 67, week: 7, question: "_________________ systems provide the consumer recommendations for products that are similar to their choices.", options: ["Key resource", "Marketing mix modelling", "Recommender", "None of the above"], answer: "Recommender" },
  { id: 68, week: 7, question: "Personalization concerns adapting to the individual needs, interests and preferences by ____________________", options: ["Recommendation", "Filtering", "Predictions", "All of the above"], answer: "All of the above" },
  { id: 69, week: 7, question: "A group of guitarists, anchors and singers are performing in an event. To do further analysis on a dataset of their personal choices, similarities and dissimilarities, the first step will be __________", options: ["Anova", "Regression", "Clustering", "None of the above"], answer: "Clustering" },
  { id: 70, week: 7, question: "Statistics draws population inferences from a sample, while machine learning finds generalizable predictive patterns.", options: ["True", "False"], answer: "True" },

  // Week 8
  { id: 71, week: 8, question: "A decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility.", options: ["True", "False"], answer: "True" },
  { id: 72, week: 8, question: "_____________ is a data mining technique used by retailers to increase sales by better understanding customer co-purchasing patterns.", options: ["Outlier analysis", "Matrix evaluation analysis", "Market basket analysis", "None"], answer: "Market basket analysis" },
  { id: 73, week: 8, question: "Function itemplot() is used to create an item frequency bar plot for inspecting the item frequency distribution for objects.", options: ["True", "False"], answer: "False" },
  { id: 74, week: 8, question: "RFM helps companies to find ways to improve customer spending.", options: ["True", "False"], answer: "True" },
  { id: 75, week: 8, question: "________ analysis helps companies take decisions on promotions and offers for selected customer base.", options: ["RFM", "Conjoint", "Similarity", "None of the above"], answer: "RFM" },
  { id: 76, week: 8, question: "How often has a customer transacted or interacted with the brand during a particular period of time? Is represented by __________", options: ["Recency", "Frequency", "Monetary", "All of the above"], answer: "Frequency" },
  { id: 77, week: 8, question: "Looking at monetary divided by frequency will indicate the average purchase amount.", options: ["True", "False"], answer: "True" },
  { id: 78, week: 8, question: "_________________ reads a file in table format and creates a data frame from it, with cases corresponding to lines and variables to fields in the file.", options: ["read()", "readtable()", "read.table()", "None of the above"], answer: "read.table()" },
  { id: 79, week: 8, question: "Function is.date() is used to convert between character representations and objects of class date.", options: ["True", "False"], answer: "False" },
  { id: 80, week: 8, question: "_________________ allows marketers to target specific clusters of customers with communications that are much more relevant for their particular behavior.", options: ["RFM segmentation", "RFM targeting", "RFM customer satisfaction ranks", "None of the above"], answer: "RFM segmentation" },

  // Week 9
  { id: 81, week: 9, question: "Customer life time value helps to measure proportion of purchase, probability of purchase and repurchase, purchase frequency and sequence.", options: ["True", "False"], answer: "True" },
  { id: 82, week: 9, question: "Function bm() is used to tell R to run a generalized linear model.", options: ["True", "False"], answer: "False" },
  { id: 83, week: 9, question: "Product life cycle explains the percentage of customers that stopped using your company's product or service during a certain time frame.", options: ["True", "False"], answer: "False" },
  { id: 84, week: 9, question: "Logistic regression uses _____________ method for the best fit of data.", options: ["Least Square Error", "Maximum Likelihood", "Jaccard distance", "Both A and B"], answer: "Maximum Likelihood" },
  { id: 85, week: 9, question: "Pivot table is used for summarizing ______________", options: ["Sums", "Averages", "Both a and b", "None of the above"], answer: "Both a and b" },
  { id: 86, week: 9, question: "Customer churn analysis is important because: (1) It costs more to acquire new customers (2) It can give your company the hard truth about its customer retention. (3) In some sense it helps in measuring the failure in maintaining customers", options: ["Only 1 and 2", "1, 2 and 3", "Only 3", "Only 2 and 3"], answer: "1, 2 and 3" },
  { id: 87, week: 9, question: "_______________ measures the total worth a customer brings to your business during their lifetime.", options: ["Customer churn", "Customer spend analysis", "Customer lifetime value", "None of the above"], answer: "Customer lifetime value" },
  { id: 88, week: 9, question: "Function string.h() is a compact way to display the structure of an R object.", options: ["True", "False"], answer: "False" },
  { id: 89, week: 9, question: "_____________ regression is mainly used for classification as it's a classification algorithm.", options: ["Linear", "Progressive", "Logistic", "None of the above"], answer: "Logistic" },
  { id: 90, week: 9, question: "__________ curves are commonly used to characterize the sensitivity/specificity tradeoffs for a binary classifier.", options: ["Receiver Linear characteristic", "Receiver Frequency characteristic", "Receiver operating characteristic", "All of the above"], answer: "Receiver operating characteristic" },

  // Week 10
  { id: 91, week: 10, question: "Which of the following options will be possible sources of data for text mining? (1) Sales data (2) Revenue (3) Emails (4) Competitor's blog (5) Advertising and marketing (6) Human resources data", options: ["2,3,4,5", "3,4,5,6", "1,2,3,4,5", "3,4,6"], answer: "3,4,5,6" },
  { id: 92, week: 10, question: "Naive Bayes classifier assumes that the effect of the value of a predictor (x) on a given class (c) is independent of the values of other predictors.", options: ["True", "False"], answer: "True" },
  { id: 93, week: 10, question: "In naive Bayes classifiers every pair of features being classified is ____________ of each other.", options: ["Dependent", "Similar", "Independent", "Opposite"], answer: "Independent" },
  { id: 94, week: 10, question: "Dimension reduction improves the performance of clustering techniques.", options: ["True", "False"], answer: "True" },
  { id: 95, week: 10, question: "_________________ takes a grouping of texts and makes each element of the resulting vector a document within your R Workspace.", options: ["hectorsource()", "smartsource()", "vectorsource()", "All of the above"], answer: "vectorsource()" },
  { id: 96, week: 10, question: "Predictive analytics is the process of deriving high-quality information from text.", options: ["True", "False"], answer: "False" },
  { id: 97, week: 10, question: "________ of a document means working out the grammatical structure of sentences, for instance, which groups of words go together (as 'phrases') and which words are the subject or object of a verb.", options: ["Predictive modelling", "Text analytics", "Parsing", "None of the above"], answer: "Parsing" },
  { id: 98, week: 10, question: "__________________ concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.", options: ["Natural language processing", "Data analytics", "Sentiment analysis", "None of the above"], answer: "Natural language processing" },
  { id: 99, week: 10, question: "Function vector() collects text documents over which we would apply text mining or natural language processing routines to derive inferences.", options: ["True", "False"], answer: "False" },
  { id: 100, week: 10, question: "Sentiment analysis refers to the use of NLP, text analysis, computational linguistics, and biometrics to systematically __________________ and study affective states and subjective information. (1) Identify (2) Extract (3) Quantify", options: ["Only 1", "Only 1 and 3", "Only 2", "1, 2 and 3"], answer: "1, 2 and 3" },

  // Week 11
  { id: 101, week: 11, question: "A smaller p-value means that there is stronger evidence in favor of the null hypothesis.", options: ["True", "False"], answer: "False" },
  { id: 102, week: 11, question: "The __________ lexicon categorizes words in a binary fashion ('yes'/'no') into categories of basic emotions.", options: ["Bing", "AFFIN", "Both a and b", "None of the above"], answer: "None of the above" },
  { id: 103, week: 11, question: "Bing lexicon assigns words with a score that runs between -5 and 5, with negative scores indicating negative sentiment and positive scores indicating positive sentiment.", options: ["True", "False"], answer: "False" },
  { id: 104, week: 11, question: "The NRC Emotion Lexicon is a list of English words and their associations with ____ basic emotions and _____ sentiments.", options: ["7,2", "6,2", "3,4", "8,2"], answer: "8,2" },
  { id: 105, week: 11, question: "Function sample() is used for __________.", options: ["Probability check of samples", "Selecting samples from population data", "Random selection of numbers from a set.", "None of the above"], answer: "Random selection of numbers from a set." },
  { id: 106, week: 11, question: "A text ____________ is a large and unstructured set of texts.", options: ["Predictor", "Delimiter", "Corpus", "None of the above"], answer: "Corpus" },
  { id: 107, week: 11, question: "The correct sequence of measures for the text mining process: (1) Feature selection (2) Data mining (3) Evaluation (4) Text analysis and preprocessing (5) Application (6) Text transformation", options: ["1,3,4,6,5,2", "4,6,3,5,1,2", "4,6,1,2,5,3", "4,6,1,2,3,5"], answer: "4,6,1,2,3,5" },
  { id: 108, week: 11, question: "In R programming, the mutate function is used to create a new variable from a data set.", options: ["True", "False"], answer: "True" },
  { id: 109, week: 11, question: "Levenshtein distance between two words is the minimum number of single-character edits.", options: ["True", "False"], answer: "True" },
  { id: 110, week: 11, question: "Bayes classifiers use __________ data to calculate an observed probability of each class based on all the features.", options: ["Training", "Exponential", "Z-score", "None of the above"], answer: "Training" },

  // Week 12
  { id: 111, week: 12, question: "The idea of a _______________ algorithm is to consider a force between any two nodes.", options: ["Walktrap", "Fruchterman-Reingold", "Betweenness centrality", "HITS"], answer: "Fruchterman-Reingold" },
  { id: 112, week: 12, question: "R software aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.", options: ["True", "False"], answer: "False" },
  { id: 113, week: 12, question: "Select the suitable pairs: 1-Tnet, 2-Statnet, 3-Sna, 4-Igraph with: (a) Includes node and graph-level indices, structural distance and covariance methods (b) Social network library (c) Weighted, two node networks (d) For statistical analysis of social networks", options: ["1-b, 2-c, 3-a, 4-d", "1-c, 2-d, 3-b, 4-a", "1-a, 2-c, 3-b, 4-d", "1-c, 2-a, 3-b, 4-d"], answer: "1-c, 2-d, 3-b, 4-a" },
  { id: 114, week: 12, question: "______________ arrange and rearrange statistics in order to draw attention to useful information.", options: ["Matrix", "Nodes", "Ties", "Pivot table"], answer: "Pivot table" },
  { id: 115, week: 12, question: "Social network analysis can be used to find the impact of product features on consumer utility.", options: ["True", "False"], answer: "False" },
  { id: 116, week: 12, question: "______________ is the process of extracting knowledge structures from continuous rapid data records.", options: ["Snapshots", "Data mining", "Conjoint analysis", "None of the above"], answer: "Data mining" },
  { id: 117, week: 12, question: "__________ is a library collection for creating and manipulating graphs and analyzing networks.", options: ["xgraph", "pgraph", "zgraph", "None of the above"], answer: "None of the above" },
  { id: 118, week: 12, question: "Ties are the individual actors within the networks, and nodes are the relationships between the actors.", options: ["True", "False"], answer: "False" },
  { id: 119, week: 12, question: "A patient and therapist, a woman and her husband, a girl and her stepfather, etc. are examples of:", options: ["Dyad", "Triad", "Both a and b", "None"], answer: "Dyad" },
  { id: 120, week: 12, question: "Betweenness centrality quantifies the number of times a node acts as a bridge along the shortest path between two other nodes.", options: ["True", "False"], answer: "True" },
];
